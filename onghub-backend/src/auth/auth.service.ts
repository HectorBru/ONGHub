import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import "reflect-metadata";
import {
  SignInDto,
  SignUpDto,
  SignUpNgoDto,
  SignUpRegisteredUserDto,
} from "./dto.auth";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin } from "src/admin/admin.model";
import { Repository } from "typeorm";
import { RegisteredUser } from "src/registered-user/registered.user.model";
import { Ngo } from "src/ngo/ngo.model";
import { now } from "mongoose";
import { User } from "src/users/user.model";
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
    var user: any = await this.registeredUserRepository.findOne({
      where: [
        { username: dto.usernameOrEmail },
        { email: dto.usernameOrEmail },
      ],
    });
    if (!user) {
      user = await this.ngoRepository.findOne({
        where: [
          { username: dto.usernameOrEmail },
          { email: dto.usernameOrEmail },
        ],
      });
      console.log(user);
    }
    if (!user) {
      let user = await this.adminRepository.findOne({
        where: [
          { username: dto.usernameOrEmail },
          { email: dto.usernameOrEmail },
        ],
      });
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
      type: this.getUserType(user),
    };
  }

  async signUpRegisteredUser(dto: SignUpRegisteredUserDto) {
    const hash = await this.hashPassword(dto.password);
    let user = new RegisteredUser(
      dto.name,
      dto.username,
      hash,
      now(),
      dto.ODS,
      dto.email
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
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUpNgo(dto: SignUpNgoDto) {
    const hash = await this.hashPassword(dto.password);
    let user = new Ngo(
      dto.name,
      dto.username,
      hash,
      now(),
      dto.orientation,
      dto.influenceArea,
      dto.mission,
      dto.webPage,
      dto.email,
      dto.profilePicture
    );

    const userExists = await this.ngoExists(user);

    if (userExists) {
      throw new ConflictException("User already exists.");
    }

    try {
      await this.ngoRepository.save(user);
    } catch (error) {
      return error;
    }

    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUpAdmin(dto: SignUpDto) {
    const hash = await this.hashPassword(dto.password);
    let user = new Admin(dto.name, dto.username, hash, now(), dto.email);

    const userExists = await this.adminExists(user);

    if (userExists) {
      throw new ConflictException("User already exists.");
    }

    try {
      await this.adminRepository.save(user);
    } catch (error) {
      return error;
    }

    const payload = { username: user.username };
    console.log(payload);
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

  async adminExists(user: Admin) {
    const users = await this.adminRepository.find({
      where: [{ username: user.username }, { email: user.email }],
    });
    return users.length > 0;
  }
  getUserType(user: any): String | ConflictException {
    return user instanceof RegisteredUser
      ? "RegisteredUser"
      : user instanceof Ngo
      ? "Ngo"
      : user instanceof Admin
      ? "Admin"
      : new ConflictException();
  }
}
