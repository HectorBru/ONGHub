import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { PostService } from "./post.service";

@Controller("api/post")
export class PostController {
  constructor(private postService: PostService) {}

  @Get("/getAll")
  getAll() {
    return this.postService.getAll();
  }

  @Get("/getById/:id")
  getById(@Param("id") id: number) {
    return id;
  }

  @Post("/createPost")
  createUser(@Body() body: any) {
    return this.postService.addPost();
  }

  @Put("/updateUser/:id")
  updateUser(@Body() body: any, @Param("id") id: number) {
    return body;
  }

  @Delete("/deleteUser/:id")
  deleteUser(@Param("id") id: number) {
    return true;
  }
}
