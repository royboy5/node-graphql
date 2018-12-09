import dotenv from 'dotenv'

dotenv.config()

module.exports = {
  logging: {
    level: process.env.LOG_LEVEL || 'debug',
    query: true
  }
}
