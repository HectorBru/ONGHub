import { User } from "src/users/user.model";
import { Entity } from "typeorm";

@Entity()
export class Admin extends User {
  constructor(
    name: string,
    username: string,
    password: string,
    insertDate: Date,
    email?: string,
    profilePicture?: string,
    id?: number
  ) {
    super(name, username, password, email, profilePicture, insertDate, id);
  }
}
