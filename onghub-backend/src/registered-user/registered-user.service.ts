import { Injectable } from "@nestjs/common";
import { ODS } from "src/enums";
import { RegisteredUser } from "./registered.user.model";

@Injectable()
export class RegisteredUserService {
  constructor() {}

  async getAll() {
    // const users = await this.RegisteredUserModel.find().exec();
    // return {
    //   msg: users,
    // };
  }

  async addUser() {
    // let userD = new RegisteredUser();
    // userD.username = "Timber";
    // userD.password = "Contras";
    // userD.insertDate = now();
    // userD.name = "Paco";
    // userD.ODS = [ODS["accion por el clima"], ODS["agua limpia y saneamiento"]];
    // console.log(userD);
    // return this.RegisteredUserModel.create(userD);
  }
}
