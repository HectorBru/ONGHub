import { PostService } from "./post.service";
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    getAll(): Promise<{
        msg: import("./post.model").Post[];
    }>;
    getById(id: number): number;
    createUser(body: any): Promise<import("./post.model").Post>;
    updateUser(body: any, id: number): any;
    deleteUser(id: number): boolean;
}
