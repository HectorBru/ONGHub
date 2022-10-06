import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "./auth-strategy/jwt.strategy";
import { AuthService } from "./auth.service";
import {
  SignInDto,
  SignUpDto,
  SignUpNgoDto,
  SignUpRegisteredUserDto,
} from "./dto.auth";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard("local"))
  @Post("login")
  async signIn(@Body() dto: SignInDto) {
    console.log(dto);
    return this.authService.login(dto);
  }

  @Post("signupRegisteredUser")
  signUpRegisteredUser(@Body() dto: SignUpRegisteredUserDto) {
    return this.authService.signUpRegisteredUser(dto);
  }

  @Post("signupNgo")
  signUpNgo(@Body() dto: SignUpNgoDto) {
    return this.authService.signUpNgo(dto);
  }

  @Post("signupAdmin")
  signUpAdmin(@Body() dto: SignUpDto) {
    return this.authService.signUpAdmin(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("getSession/")
  getProfile(@Request() req) {
    return req.user;
  }
}
