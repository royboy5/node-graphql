import dotenv from 'dotenv';

dotenv.config();

export default {
  env: process.env.NODE_ENV || 'development',
  production: {
    ssl: true,
    port: 8443,
    hostname: '0.0.0.0',
  },
  development: {
    ssl: false,
    port: 5000,
    hostname: 'localhost',
  },
  logging: {
    level: process.env.LOG_LEVEL || 'debug',
    query: true,
  },
};
