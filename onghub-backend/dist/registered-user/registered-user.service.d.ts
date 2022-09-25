import { Repository } from "typeorm";
import { RegisteredUser } from "./registered.user.model";
export declare class RegisteredUserService {
    private registeredUsersRepository;
    constructor(registeredUsersRepository: Repository<RegisteredUser>);
    getAll(): Promise<{
        msg: RegisteredUser[];
    }>;
    getByUsernameWithoutPassword(username: string): Promise<RegisteredUser>;
    addUser(): Promise<void>;
}
