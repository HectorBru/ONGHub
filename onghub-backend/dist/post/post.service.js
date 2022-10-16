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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ngo_service_1 = require("../ngo/ngo.service");
const typeorm_2 = require("typeorm");
const post_model_1 = require("./post.model");
let PostService = class PostService {
    constructor(postRepository, ngoService) {
        this.postRepository = postRepository;
        this.ngoService = ngoService;
    }
    async getAll(req) {
        const posts = await this.postRepository
            .find();
        return {
            msg: posts,
        };
    }
    async getById(postId) {
        const post = await this.postRepository.findOneBy({ id: postId });
        return post;
    }
    async addLike(postId, body) {
        let post = await this.postRepository.findOneBy({ id: postId });
        if (body["userType"] == "ngo") {
            let ngoThatLiked = post.ngoThatLiked;
            ngoThatLiked = ngoThatLiked.concat(body["userId"]);
            return this.postRepository.update(postId, {
                ngoThatLiked: ngoThatLiked,
                likes: post.likes + 1,
            });
        }
        else if (body["userType"] == "registeredUser") {
            let registeredUserThatLiked = post.registeredUserThatLiked;
            registeredUserThatLiked = registeredUserThatLiked.concat(body["userId"]);
            return this.postRepository.update(postId, {
                registeredUserThatLiked: registeredUserThatLiked,
                likes: post.likes + 1,
            });
        }
    }
    async removeLike(postId, body) {
        let post = await this.postRepository.findOneBy({ id: postId });
        if (body["userType"] == "ngo") {
            let ngoThatLiked = post.ngoThatLiked;
            const index = ngoThatLiked.indexOf(body["userId"]);
            ngoThatLiked.splice(index, 1);
            return this.postRepository.update(postId, {
                ngoThatLiked: ngoThatLiked,
                likes: post.likes - 1,
            });
        }
        else if (body["userType"] == "registeredUser") {
            let registeredUserThatLiked = post.registeredUserThatLiked;
            const index = registeredUserThatLiked.indexOf(body["userId"]);
            registeredUserThatLiked.splice(index, 1);
            return this.postRepository.update(postId, {
                registeredUserThatLiked: registeredUserThatLiked,
                likes: post.likes - 1,
            });
        }
    }
    async addPost(dto) {
        let post = new post_model_1.Post(dto.title, dto.authorNgo, dto.description, dto.author, dto.images, dto.tags, dto.ODS, dto.likes, dto.comments, dto.ngoThatLiked, dto.registeredUserThatLiked);
        return this.postRepository.save(post);
    }
    async getPostsFromNgo(ngoUsername) {
        let ngo = await this.ngoService.getByUsernameWithoutPassword(ngoUsername);
        let ngoId = ngo.id;
        return await this.postRepository.find({ where: [{ authorNgo: ngoId }] });
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_model_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ngo_service_1.NgoService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map