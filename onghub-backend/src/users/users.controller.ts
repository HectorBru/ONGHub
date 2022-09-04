import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";

@Controller("api/users")
export class UsersController {
  @Get("/getAll")
  getAll() {
    return "asda";
  }

  @Get("getById/:id")
  getById(@Param("id") id: number) {
    return id;
  }

  @Post("/createUser")
  createUser(@Body() body: any) {
    return body;
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
