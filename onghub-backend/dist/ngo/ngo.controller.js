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
exports.NgoController = void 0;
const common_1 = require("@nestjs/common");
const ngo_service_1 = require("./ngo.service");
let NgoController = class NgoController {
    constructor(ngoService) {
        this.ngoService = ngoService;
    }
    getAll() {
        return this.ngoService.getAll();
    }
    getById(id) {
        return id;
    }
    createUser(body) {
        return this.ngoService.addUser();
    }
    updateUser(body, id) {
        return body;
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
], NgoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/getById/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NgoController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)("/createUser"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgoController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)("/updateUser/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], NgoController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)("/deleteUser/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NgoController.prototype, "deleteUser", null);
NgoController = __decorate([
    (0, common_1.Controller)("api/ngo"),
    __metadata("design:paramtypes", [ngo_service_1.NgoService])
], NgoController);
exports.NgoController = NgoController;
//# sourceMappingURL=ngo.controller.js.map