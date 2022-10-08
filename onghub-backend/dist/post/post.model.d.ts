export declare class Post {
    constructor(title: string, authorNgo: number, description?: string, author?: string, images?: string, tags?: string[], ODS?: string[], likes?: number, comments?: number[], id?: number);
    id: number;
    title: string;
    description: string;
    author: string;
    images: string;
    tags: string[];
    ODS: string[];
    insertDate: Date;
    likes: number;
    authorNgo: number;
    comments: number[];
}
export declare class Comment {
    id: number;
    text: string;
    post: number;
    authorNgo: number;
    authorUser: number;
}
