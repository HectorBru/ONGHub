import { ODS } from "src/enums";
import { Post, Comment } from "src/post/post.model";
import { User } from "src/users/user.model";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";

@Entity()
export class RegisteredUser extends User {
  constructor(
    name: string,
    username: string,
    password: string,
    insertDate: Date,
    ODS: string[],
    email?: string,
    profilePicture?: string,
    savedPosts?: number[],
    comments?: number[],
    id?: number
  ) {
    super(name, username, password, email, profilePicture, insertDate, id);
    this.ODS = ODS;
    this.savedPosts = savedPosts;
    this.comments = comments;
  }

  @Column("varchar", { array: true })
  ODS: string[];

  @ManyToMany((type) => Post, { nullable: true })
  @JoinTable()
  savedPosts: number[];

  @OneToMany(() => Comment, (comment) => comment.authorUser)
  comments: number[];
}
