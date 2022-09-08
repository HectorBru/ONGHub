import mongoose, { Document } from "mongoose";
import { AreaInfluencia, Orientacion } from "src/enums";
import { RegisteredUser } from "src/registered-user/registered.user.model";
import { User } from "src/users/user.model";
export declare type NgoDocument = Ngo & Document;
export declare class Ngo extends User {
    orientacion: Orientacion[];
    areaInfluencia: AreaInfluencia;
    mision: string;
    paginaWeb: string[];
    suscribed_users: RegisteredUser[];
}
export declare const NgoSchema: mongoose.Schema<Ngo, mongoose.Model<Ngo, any, any, any, any>, {}, {}, {}, {}, "type", Ngo>;
