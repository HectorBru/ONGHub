import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from "@nestjs/common";
import { GetPostDto } from "./dto.post";
import { PostService } from "./post.service";

@Controller("api/post")
export class PostController {
  constructor(private postService: PostService) {}

  @Get("/getAll")
  //Param RequestPostDto?
  getAllWithQueryParameters(@Req() req: Request) {
    //Cambiar valor de vuelta a ResponsePostDto?
    return this.postService.getAll(req);
  }

  @Post("/createPost")
  createPost(@Body() body: any) {
    return this.postService.addPost();
  }

  @Put("/updatePost/:id")
  updatePost(@Body() body: any, @Param("id") id: number) {
    return body;
  }

  @Delete("/deletePost/:id")
  deletePost(@Param("id") id: number) {
    return true;
  }
}
