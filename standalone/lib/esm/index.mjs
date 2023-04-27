export default class DepInjLib {
    config;
    logger;
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
const createDepInjLib = (config, logger) => {
    return new DepInjLib(config, logger);
};
export { createDepInjLib };
