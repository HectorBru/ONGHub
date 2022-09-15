import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "src/post/post.model";
export abstract class User {
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
