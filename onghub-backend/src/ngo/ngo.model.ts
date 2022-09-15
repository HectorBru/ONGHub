import { AreaInfluencia, Orientacion } from "src/enums";
import { Post } from "src/post/post.model";
import { RegisteredUser } from "src/registered-user/registered.user.model";
import { User } from "src/users/user.model";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { Comment } from "src/post/post.model";
@Entity()
export class Ngo extends User {
  @Column({ type: String, enum: Orientacion })
  orientacion: Orientacion[];

  @Column({ type: String, enum: AreaInfluencia })
  areaInfluencia: AreaInfluencia;

  @Column()
  mision: string;

  @Column({ array: true, type: String })
  paginaWeb: string[];

  @ManyToMany((type) => RegisteredUser, { nullable: true })
  @JoinTable()
  subscribedUsers: number[];

  @ManyToMany((type) => Post, { nullable: true })
  @JoinTable()
  savedPosts: number[];

  @OneToMany(() => Post, (post) => post.authorNgo)
  publishedPosts: number[];

  @OneToMany(() => Comment, (comment) => comment.authorNgo)
  comments: number[];
}
