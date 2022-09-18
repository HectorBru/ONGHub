import { AuthService } from "./auth.service";
import { SignInDto, SignUpDto, SignUpNgoDto, SignUpRegisteredUserDto } from "./dto.auth";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(dto: SignInDto): Promise<{
        access_token: string;
        type: String | import("@nestjs/common").ConflictException;
    }>;
    signUpRegisteredUser(dto: SignUpRegisteredUserDto): Promise<any>;
    signUpNgo(dto: SignUpNgoDto): Promise<any>;
    signUpAdmin(dto: SignUpDto): Promise<any>;
}
