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
    return this.ngoService.getByUsernameWithoutPassword(id);
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
}
