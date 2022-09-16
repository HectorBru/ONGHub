import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtService } from "@nestjs/jwt";
import { Admin } from "src/admin/admin.model";
import { RegisteredUser } from "src/registered-user/registered.user.model";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ngo } from "src/ngo/ngo.model";

@Module({
  imports: [TypeOrmModule.forFeature([RegisteredUser, Admin, Ngo])],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
