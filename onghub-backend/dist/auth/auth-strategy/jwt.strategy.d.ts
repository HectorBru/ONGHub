import { RegisteredUserService } from "src/registered-user/registered-user.service";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private registeredUserService;
    constructor(registeredUserService: RegisteredUserService);
    validate(payload: any): Promise<import("../../registered-user/registered.user.model").RegisteredUser>;
}
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
}
export {};
