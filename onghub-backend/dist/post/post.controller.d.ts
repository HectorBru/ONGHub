import { PostService } from "./post.service";
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    getAll(): Promise<void>;
    getById(id: number): number;
    createUser(body: any): Promise<void>;
    updateUser(body: any, id: number): any;
    deleteUser(id: number): boolean;
}
