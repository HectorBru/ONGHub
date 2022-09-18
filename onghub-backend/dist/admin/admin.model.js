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
exports.Admin = void 0;
const user_model_1 = require("../users/user.model");
const typeorm_1 = require("typeorm");
let Admin = class Admin extends user_model_1.User {
    constructor(name, username, password, insertDate, email, profilePicture, id) {
        super(name, username, password, email, profilePicture, insertDate, id);
    }
};
Admin = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, Date, String, String, Number])
], Admin);
exports.Admin = Admin;
//# sourceMappingURL=admin.model.js.map