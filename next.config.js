const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    }
  }

  return {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    /* config options for all phases except development here */
  }
}
