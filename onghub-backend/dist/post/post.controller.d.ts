import { PostService } from "./post.service";
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    getAllWithQueryParameters(req: Request): Promise<{
        msg: import("./post.model").Post[];
    }>;
    createPost(body: any): Promise<import("./post.model").Post>;
    updatePost(body: any, id: number): any;
    deletePost(id: number): boolean;
}
