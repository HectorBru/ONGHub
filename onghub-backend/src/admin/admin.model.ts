import { User } from "src/users/user.model";
import { Entity } from "typeorm";

@Entity()
export class Admin extends User {}
