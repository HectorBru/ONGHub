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
    return {
      msg: posts,
    };
  }

  async getById(postId: number) {
    const post = await this.postRepository.findOneBy({ id: postId });
    return post;
  }

  async addLike(postId: number, body: any) {
    let post: Post = await this.postRepository.findOneBy({ id: postId });
    if (body["userType"] == "ngo") {
      let ngoThatLiked = post.ngoThatLiked;
      ngoThatLiked = ngoThatLiked.concat(body["userId"]);
      return this.postRepository.update(postId, {
        ngoThatLiked: ngoThatLiked,
        likes: post.likes + 1,
      });
    } else if (body["userType"] == "registeredUser") {
      let registeredUserThatLiked = post.registeredUserThatLiked;
      registeredUserThatLiked = registeredUserThatLiked.concat(body["userId"]);
      return this.postRepository.update(postId, {
        registeredUserThatLiked: registeredUserThatLiked,
        likes: post.likes + 1,
      });
    }
  }

  async removeLike(postId: number, body: any) {
    let post: Post = await this.postRepository.findOneBy({ id: postId });
    if (body["userType"] == "ngo") {
      let ngoThatLiked = post.ngoThatLiked;
      const index = ngoThatLiked.indexOf(body["userId"]);
      ngoThatLiked.splice(index, 1);
      return this.postRepository.update(postId, {
        ngoThatLiked: ngoThatLiked,
        likes: post.likes - 1,
      });
    } else if (body["userType"] == "registeredUser") {
      let registeredUserThatLiked = post.registeredUserThatLiked;
      const index = registeredUserThatLiked.indexOf(body["userId"]);
      registeredUserThatLiked.splice(index, 1);
      return this.postRepository.update(postId, {
        registeredUserThatLiked: registeredUserThatLiked,
        likes: post.likes - 1,
      });
    }
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
      dto.comments,
      dto.ngoThatLiked,
      dto.registeredUserThatLiked
    );
    return this.postRepository.save(post);
  }
}
