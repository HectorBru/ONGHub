import { ODS } from "src/enums";
export declare class Post {
    id: number;
    title: string;
    description: string;
    author: string;
    images: string;
    tags: string;
    ODS: ODS[];
    insertDate: Date;
}
