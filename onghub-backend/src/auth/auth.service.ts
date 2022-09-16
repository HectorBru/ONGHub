import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import "reflect-metadata";
import { SignInDto, SignUpRegisteredUserDto } from "./dto.auth";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin } from "src/admin/admin.model";
import { Repository } from "typeorm";
import { RegisteredUser } from "src/registered-user/registered.user.model";
import { Ngo } from "src/ngo/ngo.model";
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(RegisteredUser)
    private registeredUserRepository: Repository<RegisteredUser>,
    @InjectRepository(Ngo)
    private ngoRepository: Repository<Ngo>,
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>
  ) {}

  async login(dto: SignInDto) {
    let user = await this.registeredUserRepository.find({
      where: [
        { username: dto.usernameOrEmail },
        { email: dto.usernameOrEmail },
      ],
    })[0];
    if (!user) {
      user = await this.ngoRepository.find({
        where: [
          { username: dto.usernameOrEmail },
          { email: dto.usernameOrEmail },
        ],
      })[0];
      if (!user) {
        user = await this.adminRepository.find({
          where: [
            { username: dto.usernameOrEmail },
            { email: dto.usernameOrEmail },
          ],
        })[0];
        if (!user) {
          throw new UnauthorizedException();
        }
      }
      const compare = await bcrypt.compare(dto.password, user.password);
      if (!compare) {
        throw new UnauthorizedException();
      }
      const payload = { username: user.username };
      return {
        access_token: this.jwtService.sign(payload),
        type: user.type,
      };
    }
  }

  async signUpRegisteredUser(dto: SignUpRegisteredUserDto) {
    const hash = await this.hashPassword(dto.password);

    const user = new RegisteredUser(
      dto.name,
      dto.username,
      hash,
      new Date(),
      dto.ODS,
      dto.email,
      dto.profilePicture
    );

    const userExists = await this.registeredUserExists(user);

    if (userExists) {
      throw new ConflictException("User already exists.");
    }

    try {
      await this.registeredUserRepository.save(user);
    } catch (error) {
      return error;
    }

    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async hashPassword(password: string) {
    const saltOrRounds = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  async registeredUserExists(user: RegisteredUser) {
    const users = await this.registeredUserRepository.find({
      where: [{ username: user.username }, { email: user.email }],
    });
    return users.length > 0;
  }

  async ngoExists(user: Ngo) {
    const users = await this.ngoRepository.find({
      where: [{ username: user.username }, { email: user.email }],
    });
    return users.length > 0;
  }
}
