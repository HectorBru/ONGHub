import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { RegisteredUserService } from "./registered-user.service";

@Controller("/api/registered_user")
export class RegisteredUserController {
  constructor(private registeredUserService: RegisteredUserService) {}

  @Get("/getAll")
  getAll() {
    return this.registeredUserService.getAll();
  }

  @Get("/getById/:id")
  getById(@Param("id") id: number) {
    return id;
  }

  @Post("/createUser")
  createUser(@Body() body: any) {
    return this.registeredUserService.addUser();
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
