import { Repository } from "typeorm";
import { Ngo } from "./ngo.model";
export declare class NgoService {
    private ngoRepository;
    constructor(ngoRepository: Repository<Ngo>);
    getAll(): Promise<{
        msg: Ngo[];
    }>;
    getByIdWithoutPassword(id: number): Promise<Ngo>;
    getByUsernameWithoutPassword(username: string): Promise<Ngo>;
    addUser(): Promise<void>;
    follow(userId: number, ngo: Ngo): Promise<import("typeorm").UpdateResult>;
    unfollow(userId: number, ngo: Ngo): Promise<import("typeorm").UpdateResult>;
}
