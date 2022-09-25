import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { Admin } from "src/admin/admin.model";
import { RegisteredUser } from "src/registered-user/registered.user.model";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ngo } from "src/ngo/ngo.model";
import { LocalStrategy } from "./auth-strategy/local.strategy";
import { JwtStrategy } from "./auth-strategy/jwt.strategy";
import { RegisteredUserService } from "src/registered-user/registered-user.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([RegisteredUser, Admin, Ngo]),
    JwtModule.register({
      secret: "superSecret",
      signOptions: { expiresIn: 60 },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, RegisteredUserService],
  controllers: [AuthController],
})
export class AuthModule {}
