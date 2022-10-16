import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ngo } from "src/ngo/ngo.model";
import { NgoService } from "src/ngo/ngo.service";
import { PostController } from "./post.controller";
import { Post } from "./post.model";
import { PostService } from "./post.service";

@Module({
  imports: [TypeOrmModule.forFeature([Post, Ngo])],
  controllers: [PostController],
  providers: [PostService, NgoService],
})
export class PostModule {}
