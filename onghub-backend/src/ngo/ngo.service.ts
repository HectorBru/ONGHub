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
    private ngoRepository: Repository<Ngo>
  ) {}

  async getAll() {
    const users = await this.ngoRepository.find();
    return {
      msg: users,
    };
  }

  async getByIdWithoutPassword(id: number) {
    let user = await this.ngoRepository.findOne({
      where: [{ id: id }],
    });
    delete user.password;
    return user;
  }

  async getByUsernameWithoutPassword(username: string) {
    let user = await this.ngoRepository.findOne({
      where: [{ username: username }],
    });
    delete user.password;
    return user;
  }

  async addUser() {
    return;
  }
}
