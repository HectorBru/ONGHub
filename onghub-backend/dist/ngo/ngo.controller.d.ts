import { NgoService } from "./ngo.service";
export declare class NgoController {
    private ngoService;
    constructor(ngoService: NgoService);
    getAll(): Promise<{
        msg: import("./ngo.model").Ngo[];
    }>;
    getById(id: number): number;
    createUser(body: any): Promise<void>;
    updateUser(body: any, id: number): any;
    deleteUser(id: number): boolean;
}
