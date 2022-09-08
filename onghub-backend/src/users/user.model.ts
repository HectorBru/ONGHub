import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  profilePic: string;

  @Column()
  insertDate: Date;
}
