import { ODS } from "src/enums";
import { Post, Comment } from "src/post/post.model";
import { User } from "src/users/user.model";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";

@Entity()
export class RegisteredUser extends User {
  @Column({ type: String, enum: ODS })
  ODS: ODS[];

  @ManyToMany((type) => Post, { nullable: true })
  @JoinTable()
  savedPosts: number[];

  @OneToMany(() => Comment, (comment) => comment.authorUser)
  comments: number[];
}
