import { ConflictException } from "@nestjs/common";
import "reflect-metadata";
import { SignInDto, SignUpDto, SignUpNgoDto, SignUpRegisteredUserDto } from "./dto.auth";
import { JwtService } from "@nestjs/jwt";
import { Admin } from "src/admin/admin.model";
import { Repository } from "typeorm";
import { RegisteredUser } from "src/registered-user/registered.user.model";
import { Ngo } from "src/ngo/ngo.model";
export declare class AuthService {
    private jwtService;
    private registeredUserRepository;
    private ngoRepository;
    private adminRepository;
    constructor(jwtService: JwtService, registeredUserRepository: Repository<RegisteredUser>, ngoRepository: Repository<Ngo>, adminRepository: Repository<Admin>);
    login(dto: SignInDto): Promise<{
        access_token: string;
        type: String | ConflictException;
    }>;
    signUpRegisteredUser(dto: SignUpRegisteredUserDto): Promise<any>;
    signUpNgo(dto: SignUpNgoDto): Promise<any>;
    signUpAdmin(dto: SignUpDto): Promise<any>;
    hashPassword(password: string): Promise<any>;
    registeredUserExists(user: RegisteredUser): Promise<boolean>;
    ngoExists(user: Ngo): Promise<boolean>;
    adminExists(user: Admin): Promise<boolean>;
    getUserType(user: any): String | ConflictException;
}
