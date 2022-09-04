import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { UsersService } from "./users/users.service";
import { User } from "./modelos/User";

@Module({
  imports: [UsersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, UsersService, User],
})
export class AppModule {}
