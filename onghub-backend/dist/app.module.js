"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const ngo_module_1 = require("./ngo/ngo.module");
const admin_module_1 = require("./admin/admin.module");
const registered_user_module_1 = require("./registered-user/registered-user.module");
const post_module_1 = require("./post/post.module");
const typeorm_1 = require("@nestjs/typeorm");
const admin_model_1 = require("./admin/admin.model");
const registered_user_model_1 = require("./registered-user/registered.user.model");
const post_model_1 = require("./post/post.model");
const ngo_model_1 = require("./ngo/ngo.model");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: "localhost",
                port: 49154,
                username: "postgres",
                password: "postgrespw",
                synchronize: true,
                logging: true,
                entities: [admin_model_1.Admin, registered_user_model_1.RegisteredUser, post_model_1.Post, ngo_model_1.Ngo, post_model_1.Comment],
                subscribers: [],
                migrations: [],
            }),
            ngo_module_1.NgoModule,
            admin_module_1.AdminModule,
            post_module_1.PostModule,
            registered_user_module_1.RegisteredUserModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map