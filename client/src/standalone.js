import { createDepInjLib } from 'standalone';

const config = {
  env: "FRONTEND",
  message: "I'm coming from the frontend!"
}

const depInjLib = createDepInjLib(config, console);

export default depInjLib;