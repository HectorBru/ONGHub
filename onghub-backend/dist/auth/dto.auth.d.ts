import { InfluenceArea, ODS, Orientation } from "src/enums";
export declare class SignInDto {
    constructor(usernameOrEmail: string, password: string);
    usernameOrEmail: string;
    password: string;
}
export declare abstract class SignUpDto {
    constructor(name: string, username: string, password: string, email?: string, profilePicture?: string);
    name: string;
    username: string;
    password: string;
    email: string;
    profilePicture: string;
}
export declare class SignUpRegisteredUserDto extends SignUpDto {
    constructor(name: string, username: string, password: string, email: string, profilePicture: string, ODS: ODS[]);
    ODS: ODS[];
}
export declare class SignUpNgoDto extends SignUpDto {
    constructor(name: string, username: string, password: string, orientation: Orientation[], influenceArea: InfluenceArea, mission: string, webPage: string[], email?: string, profilePicture?: string);
    orientation: Orientation[];
    influenceArea: InfluenceArea;
    mission: string;
    webPage: string[];
}
