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
exports.RegisteredUserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mongoose_1 = require("mongoose");
const enums_1 = require("../enums");
const typeorm_2 = require("typeorm");
const registered_user_model_1 = require("./registered.user.model");
let RegisteredUserService = class RegisteredUserService {
    constructor(registeredUsersRepository) {
        this.registeredUsersRepository = registeredUsersRepository;
    }
    async getAll() {
        const users = await this.registeredUsersRepository.find();
        return {
            msg: users,
        };
    }
    async addUser() {
        let userD = new registered_user_model_1.RegisteredUser();
        userD.username = "Timber";
        userD.password = "Contras";
        userD.insertDate = (0, mongoose_1.now)();
        userD.name = "Paco";
        userD.ODS = [enums_1.ODS["accion por el clima"], enums_1.ODS["agua limpia y saneamiento"]];
        console.log(userD);
        return this.registeredUsersRepository.save(userD);
    }
};
RegisteredUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registered_user_model_1.RegisteredUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegisteredUserService);
exports.RegisteredUserService = RegisteredUserService;
//# sourceMappingURL=registered-user.service.js.map