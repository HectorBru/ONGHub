"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27018,
    entities: [user_entity_1.User],
});
exports.AppDataSource.initialize().catch((error) => console.log(error));
//# sourceMappingURL=index.js.map