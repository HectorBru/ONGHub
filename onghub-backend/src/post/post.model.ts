import { now } from "mongoose";
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
  constructor(
    title: string,
    authorNgo: number,
    description?: string,
    author?: string,
    images?: string,
    tags?: string[],
    ODS?: string[],
    likes?: number,
    comments?: number[],
    ngoThatLiked?: number[],
    registeredUserThatLiked?: number[],
    id?: number
  ) {
    this.title = title;
    this.authorNgo = authorNgo;
    this.description = description;
    this.author = author;
    this.images = images;
    this.tags = tags;
    this.ODS = ODS;
    this.likes = likes;
    this.comments = comments;
    this.ngoThatLiked = ngoThatLiked;
    this.registeredUserThatLiked = registeredUserThatLiked;
    this.insertDate = now();
  }
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

  @Column("text", { array: true, nullable: true })
  tags: string[];

  @Column("text", { array: true })
  ODS: string[];

  @Column()
  insertDate: Date;

  @Column({ nullable: true })
  likes: number;

  @Column("int", { array: true })
  ngoThatLiked: number[];

  @Column("int", { array: true })
  registeredUserThatLiked: number[];

  @ManyToOne(() => Ngo, (ngo) => ngo.publishedPosts)
  @Column()
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
