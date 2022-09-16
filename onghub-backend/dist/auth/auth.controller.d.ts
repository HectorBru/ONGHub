import { AuthService } from "./auth.service";
import { SignInDto, SignUpRegisteredUserDto } from "./dto.auth";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(dto: SignInDto): Promise<{
        access_token: string;
        type: any;
    }>;
    signUpRegisteredUser(dto: SignUpRegisteredUserDto): Promise<any>;
}
