import dotenv from 'dotenv'

import { logger as log } from './utils'
import app from './app'

dotenv.config()

/**
 * Server Configuration
 */
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 5000

/**
 * Runs the server
 */
app.listen(port, host, log.info(`App listening at http://${host}:${port}`))
