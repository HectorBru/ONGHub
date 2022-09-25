import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { now } from "mongoose";
import { ODS } from "src/enums";
import { Repository } from "typeorm";
import { RegisteredUser } from "./registered.user.model";

@Injectable()
export class RegisteredUserService {
  constructor(
    @InjectRepository(RegisteredUser)
    private registeredUsersRepository: Repository<RegisteredUser>
  ) {}

  async getAll() {
    const users = await this.registeredUsersRepository.find();
    return {
      msg: users,
    };
  }

  async getByUsernameWithoutPassword(username: string) {
    let user = await this.registeredUsersRepository.findOne({
      where: [{ username: username }],
    });
    delete user.password;
    console.log(user);
    return user;
  }

  async addUser() {
    return;
  }
}
