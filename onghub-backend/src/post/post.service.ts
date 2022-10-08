import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { now } from "mongoose";
import { ODS } from "src/enums";
import { Repository } from "typeorm";
import { PostDto } from "./dto.post";
import { Post } from "./post.model";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ) {}

  async getAll(req: Request) {
    const posts = await this.postRepository
      .find //{where: [{}],}
      ();
    console.log(posts[0]);
    return {
      msg: posts,
    };
  }

  async addPost(dto: PostDto) {
    let post = new Post(
      dto.title,
      dto.authorNgo,
      dto.description,
      dto.author,
      dto.images,
      dto.tags,
      dto.ODS,
      dto.likes,
      dto.comments
    );
    return this.postRepository.save(post);
  }
}
