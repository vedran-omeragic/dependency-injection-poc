"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDepInjLib = void 0;
class DepInjLib {
    constructor(config, logger) {
        this.config = config;
        this.logger = logger;
    }
    someFunction() {
        const message = `someFunction() called => ENV: ${this.config.env} >> message: ${this.config.message}`;
        this.logger.log(`someFunction was called. Supplied CONFIG is: ${JSON.stringify(this.config)}`);
        return message;
    }
}
exports.default = DepInjLib;
const createDepInjLib = (config, logger) => {
    return new DepInjLib(config, logger);
};
exports.createDepInjLib = createDepInjLib;
