import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { now } from "mongoose";
import { InfluenceArea, ODS, Orientation } from "src/enums";
import { RegisteredUser } from "src/registered-user/registered.user.model";
import { Repository } from "typeorm";
import { Ngo } from "./ngo.model";

@Injectable()
export class NgoService {
  constructor(
    @InjectRepository(Ngo)
    private ngoRepository: Repository<Ngo>,
    @InjectRepository(RegisteredUser)
    private registeredUsersRepository: Repository<RegisteredUser>
  ) {}

  async getAll() {
    const users = await this.ngoRepository.find();
    return {
      msg: users,
    };
  }

  async addUser() {
    return;
  }
}
