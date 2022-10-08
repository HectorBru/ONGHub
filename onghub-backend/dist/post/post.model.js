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
exports.Comment = exports.Post = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../enums");
const ngo_model_1 = require("../ngo/ngo.model");
const registered_user_model_1 = require("../registered-user/registered.user.model");
const typeorm_1 = require("typeorm");
let Post = class Post {
    constructor(title, authorNgo, description, author, images, tags, ODS, likes, comments, id) {
        this.title = title;
        this.authorNgo = authorNgo;
        this.description = description;
        this.author = author;
        this.images = images;
        this.tags = tags;
        this.ODS = ODS;
        this.likes = likes;
        this.comments = comments;
        this.insertDate = (0, mongoose_1.now)();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: String }),
    __metadata("design:type", Array)
], Post.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: enums_1.ODS, type: String }),
    __metadata("design:type", Array)
], Post.prototype, "ODS", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Post.prototype, "insertDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Post.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ngo_model_1.Ngo, (ngo) => ngo.publishedPosts),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Post.prototype, "authorNgo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Comment, (comment) => comment.post),
    __metadata("design:type", Array)
], Post.prototype, "comments", void 0);
Post = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Number, String, String, String, Array, Array, Number, Array, Number])
], Post);
exports.Post = Post;
let Comment = class Comment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comment.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Post, (post) => post.comments),
    __metadata("design:type", Number)
], Comment.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ngo_model_1.Ngo, (ngo) => ngo.comments),
    __metadata("design:type", Number)
], Comment.prototype, "authorNgo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => registered_user_model_1.RegisteredUser, (user) => user.comments),
    __metadata("design:type", Number)
], Comment.prototype, "authorUser", void 0);
Comment = __decorate([
    (0, typeorm_1.Entity)()
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=post.model.js.map