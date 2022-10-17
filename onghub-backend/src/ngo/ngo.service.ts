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
    let ngo = await this.ngoRepository.findOne({
      where: [{ username: username }],
    });
    delete ngo.password;
    return ngo;
  }

  async addUser() {
    return;
  }

  async follow(userId: number, ngo: Ngo) {
    console.log("folloooow: " + ngo);
    return await this.ngoRepository.update(
      { id: ngo.id },
      { subscribedUsers: ngo.subscribedUsers }
    );
  }

  async unfollow(userId: number, ngo: Ngo) {
    if (!ngo.subscribedUsers) ngo.subscribedUsers = [];
    let index = ngo.subscribedUsers.indexOf(userId);
    ngo.subscribedUsers.splice(index, index + 1);
    return await this.ngoRepository.update(
      { id: ngo.id },
      { subscribedUsers: ngo.subscribedUsers }
    );
  }
}
