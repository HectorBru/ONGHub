import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { NgoService } from "./ngo.service";

@Controller("api/ngo")
export class NgoController {
  constructor(private ngoService: NgoService) {}

  @Get("/getAll")
  getAll() {
    return this.ngoService.getAll();
  }

  @Get("/getById/:id")
  getById(@Param("id") id: number) {
    return this.ngoService.getByIdWithoutPassword(id);
  }

  @Get("/getByUsername/:username")
  getByUsername(@Param("username") username: string) {
    console.log("BEFORE CALL: " + username);
    return this.ngoService.getByUsernameWithoutPassword(username);
  }

  @Post("/createUser")
  createUser(@Body() body: any) {
    return this.ngoService.addUser();
  }

  @Put("/updateUser/:id")
  updateUser(@Body() body: any, @Param("id") id: number) {
    return body;
  }

  @Delete("/deleteUser/:id")
  deleteUser(@Param("id") id: number) {
    return true;
  }

  @Put("/follow")
  follow(@Body() body: any) {
    return this.ngoService.follow(body["userId"], body["ngo"]);
  }

  @Put("/unfollow")
  unfollow(@Body() body: any) {
    return this.ngoService.unfollow(body["userId"], body["ngo"]);
  }
}
