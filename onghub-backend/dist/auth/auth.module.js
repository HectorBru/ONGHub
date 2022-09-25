"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const admin_model_1 = require("../admin/admin.model");
const registered_user_model_1 = require("../registered-user/registered.user.model");
const typeorm_1 = require("@nestjs/typeorm");
const ngo_model_1 = require("../ngo/ngo.model");
const local_strategy_1 = require("./auth-strategy/local.strategy");
const jwt_strategy_1 = require("./auth-strategy/jwt.strategy");
const registered_user_service_1 = require("../registered-user/registered-user.service");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([registered_user_model_1.RegisteredUser, admin_model_1.Admin, ngo_model_1.Ngo]),
            jwt_1.JwtModule.register({
                secret: "superSecret",
                signOptions: { expiresIn: 60 },
            }),
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy, registered_user_service_1.RegisteredUserService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map