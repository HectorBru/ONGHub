import { Repository } from "typeorm";
import { PostDto } from "./dto.post";
import { Post } from "./post.model";
export declare class PostService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    getAll(req: Request): Promise<{
        msg: Post[];
    }>;
    addPost(dto: PostDto): Promise<Post>;
}
