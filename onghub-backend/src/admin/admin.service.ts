import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { now } from "mongoose";
import { Repository } from "typeorm";
import { Admin } from "./admin.model";

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>
  ) {}

  async getAll() {
    const users = await this.adminRepository.find();
    return {
      msg: users,
    };
  }

  async addUser() {
    let userD = new Admin();
    userD.username = "Timber";
    userD.password = "Contras";
    userD.insertDate = now();
    userD.name = "Paco";
    return this.adminRepository.save(userD);
  }
}
