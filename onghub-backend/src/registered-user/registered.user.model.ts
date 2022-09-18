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
    ODS: String[],
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

  @Column({ type: String, enum: ODS })
  ODS: String[];

  @ManyToMany((type) => Post, { nullable: true })
  @JoinTable()
  savedPosts: number[];

  @OneToMany(() => Comment, (comment) => comment.authorUser)
  comments: number[];
}
