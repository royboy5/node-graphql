import winston from 'winston';
import moment from 'moment';

import config from '../config';

/**
 * Winston Logger with my defaults
 */

const { logging } = config;

export default winston.createLogger({
  level: config.logging.level,
  transports: [
    new winston.transports.Console({
      level: logging.level,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.printf(
          info => `${moment(info.timestamp).format('YYYY-MM-DDTHH:mm:ss:SS')} - ${info.level}: ${info.message}`,
        ),
      ),
    }),
  ],
  exitOnError: false,
});
