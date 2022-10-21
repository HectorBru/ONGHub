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
exports.RegisteredUserController = void 0;
const common_1 = require("@nestjs/common");
const registered_user_service_1 = require("./registered-user.service");
let RegisteredUserController = class RegisteredUserController {
    constructor(registeredUserService) {
        this.registeredUserService = registeredUserService;
    }
    getAll() {
        return this.registeredUserService.getAll();
    }
    getByUsername(username) {
        return this.registeredUserService.getByUsernameWithoutPassword(username);
    }
    createUser(body) {
        return this.registeredUserService.addUser();
    }
    updateUser(body, id) {
        return this.registeredUserService.updateRegisteredUser(body, id);
    }
    deleteUser(id) {
        return true;
    }
};
__decorate([
    (0, common_1.Get)("/getAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegisteredUserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/getByUsername/:username"),
    __param(0, (0, common_1.Param)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegisteredUserController.prototype, "getByUsername", null);
__decorate([
    (0, common_1.Post)("/createUser"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RegisteredUserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], RegisteredUserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)("/deleteUser/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RegisteredUserController.prototype, "deleteUser", null);
RegisteredUserController = __decorate([
    (0, common_1.Controller)("/api/registeredUser"),
    __metadata("design:paramtypes", [registered_user_service_1.RegisteredUserService])
], RegisteredUserController);
exports.RegisteredUserController = RegisteredUserController;
//# sourceMappingURL=registered-user.controller.js.map