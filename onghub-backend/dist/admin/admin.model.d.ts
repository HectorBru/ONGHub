import { User } from "src/users/user.model";
export declare class Admin extends User {
    constructor(name: string, username: string, password: string, insertDate: Date, email?: string, profilePicture?: string, id?: number);
}
