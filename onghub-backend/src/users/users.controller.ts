// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from "@nestjs/common";
// import { UsersService } from "./users.service";

// @Controller("api/users")
// export class UsersController {
//   constructor(private usersService: UsersService) {}

//   @Get("/getAll")
//   getAll() {
//     return this.usersService.getAll();
//   }

//   @Get("/getById/:id")
//   getById(@Param("id") id: number) {
//     return id;
//   }

//   @Post("/createUser")
//   createUser(@Body() body: any) {
//     return this.usersService.addUser();
//   }

//   @Put("/updateUser/:id")
//   updateUser(@Body() body: any, @Param("id") id: number) {
//     return body;
//   }

//   @Delete("/deleteUser/:id")
//   deleteUser(@Param("id") id: number) {
//     return true;
//   }
// }
