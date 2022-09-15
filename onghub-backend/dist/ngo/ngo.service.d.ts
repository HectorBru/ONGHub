import { RegisteredUser } from "src/registered-user/registered.user.model";
import { Repository } from "typeorm";
import { Ngo } from "./ngo.model";
export declare class NgoService {
    private ngoRepository;
    private registeredUsersRepository;
    constructor(ngoRepository: Repository<Ngo>, registeredUsersRepository: Repository<RegisteredUser>);
    getAll(): Promise<{
        msg: Ngo[];
    }>;
    addUser(): Promise<Ngo>;
}
