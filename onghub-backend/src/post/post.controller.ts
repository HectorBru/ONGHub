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
import { PostDto } from "./dto.post";
import { PostService } from "./post.service";

@Controller("api/post")
export class PostController {
  constructor(private postService: PostService) {}

  @Get("/getAll")
  //Param RequestPostDto?
  getAllWithQueryParameters(@Req() req: any) {
    //Cambiar valor de vuelta a ResponsePostDto?
    return this.postService.getAll(req);
  }

  @Get("/getById/:id")
  getById(@Param("id") postId) {
    return this.postService.getById(postId);
  }

  @Post("/createPost")
  createPost(@Body() dto: PostDto) {
    return this.postService.addPost(dto);
  }

  @Put("/updatePost/:id")
  updatePost(@Body() body: any, @Param("id") id: number) {
    return body;
  }

  @Delete("/deletePost/:id")
  deletePost(@Param("id") id: number) {
    return true;
  }

  @Put("/addLike/:id")
  addLike(@Param("id") postId: number, @Body() body) {
    return this.postService.addLike(postId, body);
  }

  @Put("/removeLike/:id")
  removeLike(@Param("id") postId: number, @Body() body) {
    return this.postService.removeLike(postId, body);
  }
}
