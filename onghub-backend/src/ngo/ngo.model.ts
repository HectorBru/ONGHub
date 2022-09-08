import { AreaInfluencia, Orientacion } from "src/enums";
import { RegisteredUser } from "src/registered-user/registered.user.model";
import { User } from "src/users/user.model";
import { Column, Entity } from "typeorm";

@Entity()
export class Ngo extends User {
  @Column({ type: "enum", enum: Orientacion })
  orientacion: Orientacion[];

  @Column({ type: "enum", enum: AreaInfluencia })
  areaInfluencia: AreaInfluencia;

  @Column()
  mision: string;

  @Column({ array: true, default: [], type: "char" })
  paginaWeb: string[];
}
