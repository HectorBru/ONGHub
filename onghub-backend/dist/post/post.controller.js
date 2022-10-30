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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const dto_post_1 = require("./dto.post");
const post_service_1 = require("./post.service");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    getAllWithQueryParameters(req) {
        return this.postService.getAll(req);
    }
    getById(postId) {
        return this.postService.getById(postId);
    }
    createPost(dto) {
        return this.postService.addPost(dto);
    }
    updatePost(body, id) {
        return body;
    }
    deletePost(id) {
        return true;
    }
    addLike(postId, body) {
        return this.postService.addLike(postId, body);
    }
    removeLike(postId, body) {
        return this.postService.removeLike(postId, body);
    }
    getPostsFromNgo(ngoUsername) {
        return this.postService.getPostsFromNgo(ngoUsername);
    }
};
__decorate([
    (0, common_1.Get)("/getAll"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getAllWithQueryParameters", null);
__decorate([
    (0, common_1.Get)("/getById/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_post_1.PostDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Put)("/updatePost/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)("/deletePost/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "deletePost", null);
__decorate([
    (0, common_1.Put)("/addLike/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "addLike", null);
__decorate([
    (0, common_1.Put)("/removeLike/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "removeLike", null);
__decorate([
    (0, common_1.Get)("/getPostsFromNgo/:username"),
    __param(0, (0, common_1.Param)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getPostsFromNgo", null);
PostController = __decorate([
    (0, common_1.Controller)("api/post"),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map