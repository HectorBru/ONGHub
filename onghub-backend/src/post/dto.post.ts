import { throws } from "assert";
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";
import { now } from "mongoose";
import { ODS } from "src/enums";

export class PostDto {
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
    registeredUserThatLiked?: number[]
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
  }

  @IsNotEmpty()
  title: string;

  description: string;

  author: string;

  images: string;

  tags: string[];

  ODS: string[];

  likes: number;

  authorNgo: number;

  comments: number[];

  ngoThatLiked: number[];

  registeredUserThatLiked: number[];
}
