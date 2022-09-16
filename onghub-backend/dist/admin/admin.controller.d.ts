import { AdminService } from "./admin.service";
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    getAll(): Promise<{
        msg: import("./admin.model").Admin[];
    }>;
    getById(id: number): number;
    createUser(body: any): Promise<void>;
}
