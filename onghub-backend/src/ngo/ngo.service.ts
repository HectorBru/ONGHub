import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { now } from "mongoose";
import { AreaInfluencia, ODS, Orientacion } from "src/enums";
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
    let userD = new RegisteredUser();
    userD.username = "Timber";
    userD.password = "Contras";
    userD.insertDate = now();
    userD.name = "Paco";
    userD.ODS = [ODS["accion por el clima"], ODS["agua limpia y saneamiento"]];
    userD = await this.registeredUsersRepository.save(userD);

    let ngo = new Ngo();
    ngo.username = "Timber";
    ngo.password = "Contras";
    ngo.insertDate = now();
    ngo.name = "Paco";
    ngo.areaInfluencia = AreaInfluencia["base comunitaria"];
    ngo.orientacion = [Orientacion.caridad, Orientacion.defensa];
    ngo.mision = "Nuestra misión";
    ngo.paginaWeb = ["htttp://ADasdA", "htttp://ASDASD"];
    ngo.subscribedUsers = [userD.id];

    return this.ngoRepository.save(ngo);
  }
}
