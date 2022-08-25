"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoryStorage = void 0;
const memoryStorage = () => {
    let executed = [];
    return {
        logMigration: async ({ name }) => {
            executed.push(name);
        },
        unlogMigration: async ({ name }) => {
            executed = executed.filter(n => n !== name);
        },
        executed: async () => [...executed],
    };
};
exports.memoryStorage = memoryStorage;
//# sourceMappingURL=memory.js.map