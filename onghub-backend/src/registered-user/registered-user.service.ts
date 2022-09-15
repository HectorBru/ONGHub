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

  async addUser() {
    let userD = new RegisteredUser();
    userD.username = "Timber";
    userD.password = "Contras";
    userD.insertDate = now();
    userD.name = "Paco";
    userD.ODS = [ODS["accion por el clima"], ODS["agua limpia y saneamiento"]];
    console.log(userD);
    return this.registeredUsersRepository.save(userD);
  }
}
