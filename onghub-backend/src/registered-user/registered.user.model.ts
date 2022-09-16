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
    ODS: ODS[],
    email?: string,
    profilePic?: string,
    savedPosts?: number[],
    comments?: number[],
    id?: number
  ) {
    super(name, username, password, email, profilePic, insertDate, id);
    ODS = ODS;
    savedPosts = savedPosts;
    comments = comments;
  }

  @Column({ type: String, enum: ODS })
  ODS: ODS[];

  @ManyToMany((type) => Post, { nullable: true })
  @JoinTable()
  savedPosts: number[];

  @OneToMany(() => Comment, (comment) => comment.authorUser)
  comments: number[];
}
