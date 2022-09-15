import { ODS } from "src/enums";
import { User } from "src/users/user.model";
export declare class RegisteredUser extends User {
    ODS: ODS[];
    savedPosts: number[];
    comments: number[];
}
