import { NgoService } from "./ngo.service";
export declare class NgoController {
    private ngoService;
    constructor(ngoService: NgoService);
    getAll(): Promise<{
        msg: import("./ngo.model").Ngo[];
    }>;
    getById(id: number): Promise<import("./ngo.model").Ngo>;
    getByUsername(username: string): Promise<import("./ngo.model").Ngo>;
    createUser(body: any): Promise<void>;
    updateUser(body: any, id: number): any;
    deleteUser(id: number): boolean;
    follow(body: any): Promise<import("typeorm").UpdateResult>;
    unfollow(body: any): Promise<import("typeorm").UpdateResult>;
}
