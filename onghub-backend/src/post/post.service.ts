import { Injectable } from "@nestjs/common";
import { ODS } from "src/enums";
import { Post } from "./post.model";

@Injectable()
export class PostService {
  constructor() {}

  async getAll() {
    // const posts = await this.postModel.find().exec();
    // return {
    //   msg: posts,
    // };
  }

  async addPost() {
    // let post = new Post();
    // post.title = "title";
    // post.ODS = [ODS["accion por el clima"]];
    // post.insertDate = now();
    // return this.postModel.create(post);
  }
}
