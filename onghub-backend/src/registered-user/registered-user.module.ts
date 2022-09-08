import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RegisteredUserController } from "./registered-user.controller";
import { RegisteredUserService } from "./registered-user.service";
import { RegisteredUser } from "./registered.user.model";

@Module({
  imports: [TypeOrmModule.forFeature([RegisteredUser])],
  controllers: [RegisteredUserController],
  providers: [RegisteredUserService],
})
export class RegisteredUserModule {}
