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
exports.RegisteredUser = void 0;
const post_model_1 = require("../post/post.model");
const user_model_1 = require("../users/user.model");
const typeorm_1 = require("typeorm");
let RegisteredUser = class RegisteredUser extends user_model_1.User {
    constructor(name, username, password, insertDate, ODS, email, profilePicture, savedPosts, comments, id) {
        super(name, username, password, email, profilePicture, insertDate, id);
        this.ODS = ODS;
        this.savedPosts = savedPosts;
        this.comments = comments;
    }
};
__decorate([
    (0, typeorm_1.Column)("varchar", { array: true }),
    __metadata("design:type", Array)
], RegisteredUser.prototype, "ODS", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => post_model_1.Post, { nullable: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], RegisteredUser.prototype, "savedPosts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_model_1.Comment, (comment) => comment.authorUser),
    __metadata("design:type", Array)
], RegisteredUser.prototype, "comments", void 0);
RegisteredUser = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, Date, Array, String, String, Array, Array, Number])
], RegisteredUser);
exports.RegisteredUser = RegisteredUser;
//# sourceMappingURL=registered.user.model.js.map