import { User } from "src/users/user.model";
export declare class RegisteredUser extends User {
    constructor(name: string, username: string, password: string, insertDate: Date, ODS: String[], email?: string, profilePicture?: string, savedPosts?: number[], comments?: number[], id?: number);
    ODS: String[];
    savedPosts: number[];
    comments: number[];
}
