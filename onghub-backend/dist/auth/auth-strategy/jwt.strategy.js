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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = exports.JwtStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const passport_2 = require("@nestjs/passport");
const registered_user_service_1 = require("../../registered-user/registered-user.service");
const ngo_service_1 = require("../../ngo/ngo.service");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(registeredUserService, ngoService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: "superSecret",
        });
        this.registeredUserService = registeredUserService;
        this.ngoService = ngoService;
    }
    async validate(payload) {
        let username = payload.username;
        try {
            return await this.registeredUserService.getByUsernameWithoutPassword(username);
        }
        catch (_a) { }
        try {
            return await this.ngoService.getByUsernameWithoutPassword(username);
        }
        catch (_b) {
            throw new common_1.ConflictException();
        }
        return this.registeredUserService.getByUsernameWithoutPassword(username);
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [registered_user_service_1.RegisteredUserService,
        ngo_service_1.NgoService])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_2.AuthGuard)("jwt") {
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt.strategy.js.map