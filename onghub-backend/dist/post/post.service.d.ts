import { Repository } from "typeorm";
import { PostDto } from "./dto.post";
import { Post } from "./post.model";
export declare class PostService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    getAll(req: Request): Promise<{
        msg: Post[];
    }>;
    getById(postId: number): Promise<Post>;
    addLike(postId: number, body: any): Promise<import("typeorm").UpdateResult>;
    removeLike(postId: number, body: any): Promise<import("typeorm").UpdateResult>;
    addPost(dto: PostDto): Promise<Post>;
}
