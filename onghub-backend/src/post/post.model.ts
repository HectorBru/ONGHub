import { ODS } from "src/enums";
import { Ngo } from "src/ngo/ngo.model";
import { RegisteredUser } from "src/registered-user/registered.user.model";
import { User } from "src/users/user.model";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  author: string;

  @Column({ nullable: true })
  images: string;

  @Column({ nullable: true })
  tags: string;

  @Column({ enum: ODS, type: String })
  ODS: ODS[];

  @Column()
  insertDate: Date;

  @Column({ nullable: true })
  likes: number;

  @ManyToOne(() => Ngo, (ngo) => ngo.publishedPosts)
  authorNgo: number;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: number[];
}

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: number;

  @ManyToOne(() => Ngo, (ngo) => ngo.comments)
  authorNgo: number;

  @ManyToOne(() => RegisteredUser, (user) => user.comments)
  authorUser: number;
}
