import { PostDto } from "./dto.post";
import { PostService } from "./post.service";
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    getAllWithQueryParameters(req: any): Promise<{
        msg: import("./post.model").Post[];
    }>;
    getById(postId: any): Promise<import("./post.model").Post>;
    createPost(dto: PostDto): Promise<import("./post.model").Post>;
    updatePost(body: any, id: number): any;
    deletePost(id: number): boolean;
    addLike(postId: number, body: any): Promise<import("typeorm").UpdateResult>;
    removeLike(postId: number, body: any): Promise<import("typeorm").UpdateResult>;
}
