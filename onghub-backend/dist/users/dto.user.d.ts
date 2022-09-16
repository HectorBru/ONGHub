export declare class SignInDto {
    constructor(usernameOrEmail: string, password: string);
    usernameOrEmail: string;
    password: string;
}
export declare class SignUpDto {
    constructor(username: string, password: string, email: string, profilePicture: string, fullName: string);
    username: string;
    password: string;
    email: string;
    profilePicture: string;
    fullName: string;
}
