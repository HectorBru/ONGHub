"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
require("reflect-metadata");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const admin_model_1 = require("../admin/admin.model");
const typeorm_2 = require("typeorm");
const registered_user_model_1 = require("../registered-user/registered.user.model");
const ngo_model_1 = require("../ngo/ngo.model");
let AuthService = class AuthService {
    constructor(jwtService, registeredUserRepository, ngoRepository, adminRepository) {
        this.jwtService = jwtService;
        this.registeredUserRepository = registeredUserRepository;
        this.ngoRepository = ngoRepository;
        this.adminRepository = adminRepository;
    }
    async login(dto) {
        let user = await this.registeredUserRepository.find({
            where: [
                { username: dto.usernameOrEmail },
                { email: dto.usernameOrEmail },
            ],
        })[0];
        if (!user) {
            user = await this.ngoRepository.find({
                where: [
                    { username: dto.usernameOrEmail },
                    { email: dto.usernameOrEmail },
                ],
            })[0];
            if (!user) {
                user = await this.adminRepository.find({
                    where: [
                        { username: dto.usernameOrEmail },
                        { email: dto.usernameOrEmail },
                    ],
                })[0];
                if (!user) {
                    throw new common_1.UnauthorizedException();
                }
            }
            const compare = await bcrypt.compare(dto.password, user.password);
            if (!compare) {
                throw new common_1.UnauthorizedException();
            }
            const payload = { username: user.username };
            return {
                access_token: this.jwtService.sign(payload),
                type: user.type,
            };
        }
    }
    async signUpRegisteredUser(dto) {
        const hash = await this.hashPassword(dto.password);
        const user = new registered_user_model_1.RegisteredUser(dto.name, dto.username, hash, new Date(), dto.ODS, dto.email, dto.profilePicture);
        const userExists = await this.registeredUserExists(user);
        if (userExists) {
            throw new common_1.ConflictException("User already exists.");
        }
        try {
            await this.registeredUserRepository.save(user);
        }
        catch (error) {
            return error;
        }
        const payload = { username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async hashPassword(password) {
        const saltOrRounds = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash;
    }
    async registeredUserExists(user) {
        const users = await this.registeredUserRepository.find({
            where: [{ username: user.username }, { email: user.email }],
        });
        return users.length > 0;
    }
    async ngoExists(user) {
        const users = await this.ngoRepository.find({
            where: [{ username: user.username }, { email: user.email }],
        });
        return users.length > 0;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(registered_user_model_1.RegisteredUser)),
    __param(2, (0, typeorm_1.InjectRepository)(ngo_model_1.Ngo)),
    __param(3, (0, typeorm_1.InjectRepository)(admin_model_1.Admin)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map