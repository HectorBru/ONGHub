"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_strategy_1 = require("../auth/auth-strategy/jwt.strategy");
const registered_user_service_1 = require("../registered-user/registered-user.service");
const registered_user_model_1 = require("../registered-user/registered.user.model");
const ngo_controller_1 = require("./ngo.controller");
const ngo_model_1 = require("./ngo.model");
const ngo_service_1 = require("./ngo.service");
let NgoModule = class NgoModule {
};
NgoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ngo_model_1.Ngo, registered_user_model_1.RegisteredUser])],
        controllers: [ngo_controller_1.NgoController],
        providers: [ngo_service_1.NgoService, jwt_strategy_1.JwtStrategy, registered_user_service_1.RegisteredUserService],
    })
], NgoModule);
exports.NgoModule = NgoModule;
//# sourceMappingURL=ngo.module.js.map