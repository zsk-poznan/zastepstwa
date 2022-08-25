"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONStorage = void 0;
const jetpack = require("fs-jetpack");
class JSONStorage {
    constructor(options) {
        var _a;
        this.path = (_a = options === null || options === void 0 ? void 0 : options.path) !== null && _a !== void 0 ? _a : jetpack.path(process.cwd(), 'umzug.json');
    }
    async logMigration({ name: migrationName }) {
        const loggedMigrations = await this.executed();
        loggedMigrations.push(migrationName);
        await jetpack.writeAsync(this.path, JSON.stringify(loggedMigrations, null, 2));
    }
    async unlogMigration({ name: migrationName }) {
        const loggedMigrations = await this.executed();
        const updatedMigrations = loggedMigrations.filter(name => name !== migrationName);
        await jetpack.writeAsync(this.path, JSON.stringify(updatedMigrations, null, 2));
    }
    async executed() {
        const content = await jetpack.readAsync(this.path);
        return content ? JSON.parse(content) : [];
    }
}
exports.JSONStorage = JSONStorage;
//# sourceMappingURL=json.js.map