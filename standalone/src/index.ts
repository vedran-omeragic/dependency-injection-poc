interface Config {
    env: string;
    message: string;
}

interface Logger {
    log(message: string): void;
}


export default class DepInjLib {
    public config: Config;
    public logger: Logger;

    constructor(config: Config, logger: Logger) {
        this.config = config;
        this.logger = logger;
    }

    public someFunction(): string {
        const message = `someFunction() called => ENV: ${this.config.env} >> message: ${this.config.message}`;
        this.logger.log(`someFunction was called. Supplied CONFIG is: ${JSON.stringify(this.config)}`);
        return message;
    }
}

const createDepInjLib = (config: Config, logger: Logger): DepInjLib => {
    return new DepInjLib(config, logger);
}

export { createDepInjLib };