const { createDepInjLib } = require('standalone');

const config = {
    env: 'BACKEND',
    message: "This message is sponsored by the backend."
}

const depInjLib = createDepInjLib(config, console);

module.exports = depInjLib;