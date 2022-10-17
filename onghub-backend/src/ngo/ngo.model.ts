import { InfluenceArea, Orientation } from "src/enums";
import { Post } from "src/post/post.model";
import { RegisteredUser } from "src/registered-user/registered.user.model";
import { User } from "src/users/user.model";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { Comment } from "src/post/post.model";
@Entity()
export class Ngo extends User {
  constructor(
    name: string,
    username: string,
    password: string,
    insertDate: Date,
    orientation: string[],
    influenceArea: string,
    mission: string,
    webPage: string,
    email?: string,
    profilePicture?: string,
    subscribedUsers?: number[],
    savedPosts?: number[],
    publishedPosts?: number[],
    comments?: number[],
    id?: number
  ) {
    super(name, username, password, email, profilePicture, insertDate, id);
    this.orientation = orientation;
    this.influenceArea = influenceArea;
    this.mission = mission;
    this.webPage = webPage;
    this.subscribedUsers = subscribedUsers;
    this.savedPosts = savedPosts;
    this.publishedPosts = publishedPosts;
    this.comments = comments;
  }
  @Column("text", { array: true })
  orientation: string[];

  @Column()
  influenceArea: string;

  @Column()
  mission: string;

  @Column()
  webPage: string;

  @Column("int", { array: true, nullable: true })
  subscribedUsers: number[];

  @ManyToMany((type) => Post, { nullable: true })
  @JoinTable()
  savedPosts: number[];

  @OneToMany(() => Post, (post) => post.authorNgo)
  publishedPosts: number[];

  @OneToMany(() => Comment, (comment) => comment.authorNgo)
  comments: number[];
}
