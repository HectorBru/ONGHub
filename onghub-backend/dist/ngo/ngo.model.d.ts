import { InfluenceArea, Orientation } from "src/enums";
import { User } from "src/users/user.model";
export declare class Ngo extends User {
    orientation: Orientation[];
    influenceArea: InfluenceArea;
    mision: string;
    paginaWeb: string[];
    subscribedUsers: number[];
    savedPosts: number[];
    publishedPosts: number[];
    comments: number[];
}
