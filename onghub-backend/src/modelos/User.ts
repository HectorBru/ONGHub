import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: "user_id" })
  userId!: number;

  @Column({ name: "user_name" })
  userName!: string;

  @Column({ name: "created_at" })
  createdAt?: Date;
}
