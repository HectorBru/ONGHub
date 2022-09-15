import { Repository } from "typeorm";
import { Admin } from "./admin.model";
export declare class AdminService {
    private adminRepository;
    constructor(adminRepository: Repository<Admin>);
    getAll(): Promise<{
        msg: Admin[];
    }>;
    addUser(): Promise<Admin>;
}
