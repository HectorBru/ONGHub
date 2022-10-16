import { NgoService } from "src/ngo/ngo.service";
import { Repository } from "typeorm";
import { PostDto } from "./dto.post";
import { Post } from "./post.model";
export declare class PostService {
    private postRepository;
    private ngoService;
    constructor(postRepository: Repository<Post>, ngoService: NgoService);
    getAll(req: Request): Promise<{
        msg: Post[];
    }>;
    getById(postId: number): Promise<Post>;
    addLike(postId: number, body: any): Promise<import("typeorm").UpdateResult>;
    removeLike(postId: number, body: any): Promise<import("typeorm").UpdateResult>;
    addPost(dto: PostDto): Promise<Post>;
    getPostsFromNgo(ngoUsername: string): Promise<Post[]>;
}
