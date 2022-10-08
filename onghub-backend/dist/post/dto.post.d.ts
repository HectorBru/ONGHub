export declare class PostDto {
    constructor(title: string, authorNgo: number, description?: string, author?: string, images?: string, tags?: string[], ODS?: string[], likes?: number, comments?: number[]);
    title: string;
    description: string;
    author: string;
    images: string;
    tags: string[];
    ODS: string[];
    likes: number;
    authorNgo: number;
    comments: number[];
}
