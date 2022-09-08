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
exports.Ngo = void 0;
const enums_1 = require("../enums");
const user_model_1 = require("../users/user.model");
const typeorm_1 = require("typeorm");
let Ngo = class Ngo extends user_model_1.User {
};
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: enums_1.Orientacion }),
    __metadata("design:type", Array)
], Ngo.prototype, "orientacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: enums_1.AreaInfluencia }),
    __metadata("design:type", Number)
], Ngo.prototype, "areaInfluencia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ngo.prototype, "mision", void 0);
__decorate([
    (0, typeorm_1.Column)({ array: true, default: [], type: "char" }),
    __metadata("design:type", Array)
], Ngo.prototype, "paginaWeb", void 0);
Ngo = __decorate([
    (0, typeorm_1.Entity)()
], Ngo);
exports.Ngo = Ngo;
//# sourceMappingURL=ngo.model.js.map