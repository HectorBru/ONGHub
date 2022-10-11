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
    constructor(name: string, username: string, password: string, ODS: string[], email?: string, profilePicture?: string);
    ODS: string[];
}
export declare class SignUpNgoDto extends SignUpDto {
    constructor(name: string, username: string, password: string, orientation: string[], influenceArea: string, mission: string, webPage: string, email?: string, profilePicture?: string);
    orientation: string[];
    influenceArea: string;
    mission: string;
    webPage: string;
}
