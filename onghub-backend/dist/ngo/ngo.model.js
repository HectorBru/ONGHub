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
const post_model_1 = require("../post/post.model");
const user_model_1 = require("../users/user.model");
const typeorm_1 = require("typeorm");
const post_model_2 = require("../post/post.model");
let Ngo = class Ngo extends user_model_1.User {
    constructor(name, username, password, insertDate, orientation, influenceArea, mission, webPage, email, profilePicture, subscribedUsers, savedPosts, publishedPosts, comments, id) {
        super(name, username, password, email, profilePicture, insertDate, id);
        this.orientation = orientation;
        this.influenceArea = influenceArea;
        this.mission = mission;
        this.webPage = webPage;
        this.subscribedUsers = subscribedUsers;
        this.savedPosts = savedPosts;
        this.publishedPosts = publishedPosts;
        this.comments = comments;
    }
};
__decorate([
    (0, typeorm_1.Column)("text", { array: true }),
    __metadata("design:type", Array)
], Ngo.prototype, "orientation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ngo.prototype, "influenceArea", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ngo.prototype, "mission", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ngo.prototype, "webPage", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { array: true, nullable: true }),
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
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, Date, Array, String, String, String, String, String, Array, Array, Array, Array, Number])
], Ngo);
exports.Ngo = Ngo;
//# sourceMappingURL=ngo.model.js.map