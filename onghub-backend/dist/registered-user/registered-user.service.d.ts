import { Repository } from "typeorm";
import { RegisteredUser } from "./registered.user.model";
export declare class RegisteredUserService {
    private registeredUsersRepository;
    constructor(registeredUsersRepository: Repository<RegisteredUser>);
    getAll(): Promise<{
        msg: RegisteredUser[];
    }>;
    getByUsernameWithoutPassword(username: string): Promise<RegisteredUser>;
    updateRegisteredUser(body: any, userId: number): Promise<import("typeorm").UpdateResult>;
    addUser(): Promise<void>;
}
