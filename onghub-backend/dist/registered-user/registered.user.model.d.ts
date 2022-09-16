import { ODS } from "src/enums";
import { User } from "src/users/user.model";
export declare class RegisteredUser extends User {
    constructor(name: string, username: string, password: string, insertDate: Date, ODS: ODS[], email?: string, profilePic?: string, savedPosts?: number[], comments?: number[], id?: number);
    ODS: ODS[];
    savedPosts: number[];
    comments: number[];
}
