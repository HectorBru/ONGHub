import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "src/post/post.model";
export abstract class User {
  constructor(
    name: string,
    username: string,
    password: string,
    email: string,
    profilePic: string,
    insertDate: Date,
    id?: number
  ) {
    id = id;
    name = name;
    username = username;
    password = password;
    email = email;
    profilePic = profilePic;
    insertDate = insertDate;
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
  profilePic: string;

  @Column()
  insertDate: Date;
}
