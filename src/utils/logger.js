import config from '../config'
import winston from 'winston'
import moment from 'moment'

/**
 * Winston Logger with my defaults
 */

const { logging } = config

export default winston.createLogger({
  transports: [
    new winston.transports.Console({
      timestamp () {
        return moment().format('MM-DD-YYYY HH:mm:ss')
      },
      level: logging.level,
      handleExceptions: true,
      json: false,
      colorize: true,
      prettyPrint: true
    })
  ],
  exitOnError: false
})
