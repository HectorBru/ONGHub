import mongoose, { Document } from "mongoose";
export declare type UserDocument = User & Document;
export declare class User {
    name: string;
    username: string;
    password: string;
    email: string;
    profilePic: string;
    insertDate: Date;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, "type", User>;
