import { Repository } from "typeorm";
import { Post } from "./post.model";
export declare class PostService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    getAll(): Promise<{
        msg: Post[];
    }>;
    addPost(): Promise<Post>;
}
