import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminModule } from "src/admin/admin.module";
import { AdminService } from "src/admin/admin.service";
import { JwtStrategy } from "src/auth/auth-strategy/jwt.strategy";
import { RegisteredUserService } from "src/registered-user/registered-user.service";
import { RegisteredUser } from "src/registered-user/registered.user.model";
import { NgoController } from "./ngo.controller";
import { Ngo } from "./ngo.model";
import { NgoService } from "./ngo.service";

@Module({
  imports: [TypeOrmModule.forFeature([Ngo, RegisteredUser])],
  controllers: [NgoController],
  providers: [NgoService, JwtStrategy, RegisteredUserService],
})
export class NgoModule {}
