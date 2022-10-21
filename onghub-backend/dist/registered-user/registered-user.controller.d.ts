import { RegisteredUserService } from "./registered-user.service";
export declare class RegisteredUserController {
    private registeredUserService;
    constructor(registeredUserService: RegisteredUserService);
    getAll(): Promise<{
        msg: import("./registered.user.model").RegisteredUser[];
    }>;
    getByUsername(username: string): Promise<import("./registered.user.model").RegisteredUser>;
    createUser(body: any): Promise<void>;
    updateUser(body: any, id: number): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: number): boolean;
}
