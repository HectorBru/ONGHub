import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { now } from "mongoose";
import { ODS } from "src/enums";
import { Repository } from "typeorm";
import { Post } from "./post.model";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ) {}

  async getAll(req: Request) {
    const posts = await this.postRepository.find();
    return {
      msg: posts,
    };
  }

  async addPost() {
    let post = new Post();
    post.title = "title";
    post.ODS = [ODS["accion por el clima"]];
    post.insertDate = now();
    return this.postRepository.save(post);
  }
}
