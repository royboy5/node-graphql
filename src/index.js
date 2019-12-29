// import https from 'https';
import http from 'http';

import { logger } from 'Utils';
import config from './config';

import app from './app';

/**
 * Server Configuration
 */
const serverConfig = config[config.env];

let server;

if (serverConfig.ssl) {
  /**
   * Create SSL Server
   * add in key and cert path
   */
  // server = https.createServer({
  //   key: ,
  //   cert: ,
  // }, app)
} else {
  server = http.createServer(app);
}

/**
 * Runs the server
 */
server.listen({ port: serverConfig.port, host: serverConfig.hostname }, () =>
  logger.info({
    message: `App listening at http${serverConfig.ssl ? 's' : ''}://${serverConfig.hostname}:${serverConfig.port}`,
  }),
);
