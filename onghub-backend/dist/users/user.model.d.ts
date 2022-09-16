export declare abstract class User {
    constructor(name: string, username: string, password: string, email: string, profilePic: string, insertDate: Date, id?: number);
    id: number;
    name: string;
    username: string;
    password: string;
    email: string;
    profilePic: string;
    insertDate: Date;
}
