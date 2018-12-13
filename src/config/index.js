import dotenv from 'dotenv'

dotenv.config()

export default {
  logging: {
    level: process.env.LOG_LEVEL || 'debug',
    query: true
  }
}
