import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RegisteredUserService } from "src/registered-user/registered-user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private registeredUserService: RegisteredUserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: "superSecret",
    });
  }

  async validate(payload: any) {
    let username = payload.username;
    return this.registeredUserService.getByUsernameWithoutPassword(username);
  }
}

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {}
