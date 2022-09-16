import { RegisteredUserService } from "./registered-user.service";
export declare class RegisteredUserController {
    private registeredUserService;
    constructor(registeredUserService: RegisteredUserService);
    getAll(): Promise<{
        msg: import("./registered.user.model").RegisteredUser[];
    }>;
    getById(id: number): number;
    createUser(body: any): Promise<void>;
    updateUser(body: any, id: number): any;
    deleteUser(id: number): boolean;
}
