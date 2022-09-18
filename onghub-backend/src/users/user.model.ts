import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "src/post/post.model";
export class User {
  constructor(
    name: string,
    username: string,
    password: string,
    email: string,
    profilePicture: string,
    insertDate: Date,
    id?: number
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.profilePicture = profilePicture;
    this.insertDate = insertDate;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  profilePicture: string;

  @Column()
  insertDate: Date;
}
