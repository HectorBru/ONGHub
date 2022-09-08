import { Injectable } from "@nestjs/common";
import { AreaInfluencia, Orientacion } from "src/enums";
import { Ngo } from "./ngo.model";

@Injectable()
export class NgoService {
  constructor() {}

  async getAll() {
    // const users = await this.ngoModel.find().exec();
    // return {
    //   msg: users,
    // };
  }

  async addUser() {
    // let userD = new Ngo();
    // userD.username = "Timber";
    // userD.password = "Contras";
    // userD.insertDate = now();
    // userD.name = "Paco";
    // userD.areaInfluencia = AreaInfluencia["base comunitaria"];
    // userD.orientacion = [Orientacion.caridad, Orientacion.defensa];
    // userD.mision = "Nuestra misión";
    // userD.paginaWeb = ["htttp://ADasdA", "htttp://ASDASD"];
    // return this.ngoModel.create(userD);
  }
}
