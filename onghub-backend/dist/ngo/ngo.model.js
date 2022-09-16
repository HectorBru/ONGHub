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
const post_model_1 = require("../post/post.model");
const registered_user_model_1 = require("../registered-user/registered.user.model");
const user_model_1 = require("../users/user.model");
const typeorm_1 = require("typeorm");
const post_model_2 = require("../post/post.model");
let Ngo = class Ngo extends user_model_1.User {
};
__decorate([
    (0, typeorm_1.Column)({ type: String, enum: enums_1.Orientation }),
    __metadata("design:type", Array)
], Ngo.prototype, "orientation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String, enum: enums_1.InfluenceArea }),
    __metadata("design:type", Number)
], Ngo.prototype, "influenceArea", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ngo.prototype, "mision", void 0);
__decorate([
    (0, typeorm_1.Column)({ array: true, type: String }),
    __metadata("design:type", Array)
], Ngo.prototype, "paginaWeb", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => registered_user_model_1.RegisteredUser, { nullable: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Ngo.prototype, "subscribedUsers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => post_model_1.Post, { nullable: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Ngo.prototype, "savedPosts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_model_1.Post, (post) => post.authorNgo),
    __metadata("design:type", Array)
], Ngo.prototype, "publishedPosts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_model_2.Comment, (comment) => comment.authorNgo),
    __metadata("design:type", Array)
], Ngo.prototype, "comments", void 0);
Ngo = __decorate([
    (0, typeorm_1.Entity)()
], Ngo);
exports.Ngo = Ngo;
//# sourceMappingURL=ngo.model.js.map