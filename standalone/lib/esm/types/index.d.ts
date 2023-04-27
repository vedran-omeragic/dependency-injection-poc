interface Config {
    env: string;
    message: string;
}
interface Logger {
    log(message: string): void;
}
export default class DepInjLib {
    config: Config;
    logger: Logger;
    constructor(config: Config, logger: Logger);
    someFunction(): string;
}
declare const createDepInjLib: (config: Config, logger: Logger) => DepInjLib;
export { createDepInjLib };
//# sourceMappingURL=index.d.ts.map