import { User } from "src/users/user.model";
export declare class Ngo extends User {
    constructor(name: string, username: string, password: string, insertDate: Date, orientation: String[], influenceArea: string, mission: string, webPage: String[], email?: string, profilePicture?: string, subscribedUsers?: number[], savedPosts?: number[], publishedPosts?: number[], comments?: number[], id?: number);
    orientation: String[];
    influenceArea: string;
    mission: string;
    webPage: String[];
    subscribedUsers: number[];
    savedPosts: number[];
    publishedPosts: number[];
    comments: number[];
}
