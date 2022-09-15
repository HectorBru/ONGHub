import { AreaInfluencia, Orientacion } from "src/enums";
import { User } from "src/users/user.model";
export declare class Ngo extends User {
    orientacion: Orientacion[];
    areaInfluencia: AreaInfluencia;
    mision: string;
    paginaWeb: string[];
    subscribedUsers: number[];
    savedPosts: number[];
    publishedPosts: number[];
    comments: number[];
}
