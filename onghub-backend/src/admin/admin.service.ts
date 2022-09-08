import { Injectable } from "@nestjs/common";
import { Admin } from "./admin.model";

@Injectable()
export class AdminService {
  constructor() {}

  async getAll() {
    // const users = await this.adminModel.find().exec();
    // return {
    //   msg: users,
    // };
  }

  async addUser() {
    // let userD = new Admin();
    // userD.username = "Timber";
    // userD.password = "Contras";
    // userD.insertDate = now();
    // userD.name = "Paco";
    // return this.adminModel.create(userD);
  }
}
