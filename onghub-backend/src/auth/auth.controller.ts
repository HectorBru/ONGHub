import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto, SignUpDto, SignUpRegisteredUserDto } from "./dto.auth";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("signin")
  async signIn(@Body() dto: SignInDto) {
    return this.authService.login(dto);
  }

  @Post("signupRegisteredUser")
  signUpRegisteredUser(@Body() dto: SignUpRegisteredUserDto) {
    return this.authService.signUpRegisteredUser(dto);
  }

  //   @Post("signupNgo")
  //   signUpNgo(@Body() dto: SignUpDto) {
  //     return this.authService.signup(dto);
  //   }
}
