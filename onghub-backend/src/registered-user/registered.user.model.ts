import { ODS } from "src/enums";
import { User } from "src/users/user.model";
import { Column, Entity } from "typeorm";

@Entity()
export class RegisteredUser extends User {
  @Column({ type: "enum", enum: ODS })
  ODS: ODS[];
}
