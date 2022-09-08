import { ODS } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @Column()
  images: string;

  @Column()
  tags: string;

  @Column({ enum: ODS, type: "enum" })
  ODS: ODS[];

  @Column()
  insertDate: Date;
}
