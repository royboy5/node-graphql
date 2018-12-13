import express from 'express'
import bodyParser from 'body-parser'
import expressGraphQL from 'express-graphql'

import { logger } from './utils'
import * as routes from './routes'
import schema from './schema/schema'

const app = express()

logger.info('App Starting')

/**
 * Express Server Configuration
 */
app.disable('x-powered-by')
app.use(bodyParser.json({ type: 'application/json' }))

/**
 * Express Routes
 */
app.use('/', routes.home)
app.use(
  '/graphiql',
  expressGraphQL({
    schema,
    graphiql: true
  })
)

export default app
