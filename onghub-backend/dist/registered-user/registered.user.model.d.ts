import { User } from "src/users/user.model";
export declare class RegisteredUser extends User {
    constructor(name: string, username: string, password: string, insertDate: Date, ODS: string[], email?: string, profilePicture?: string, savedPosts?: number[], comments?: number[], id?: number);
    ODS: string[];
    savedPosts: number[];
    comments: number[];
}
