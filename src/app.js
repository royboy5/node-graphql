import express from 'express'
import bodyParser from 'body-parser'
import expressGraphQL from 'express-graphql'
import cors from 'cors'

import { logger } from './utils'
import * as routes from './routes'
import schema from './schema'

const app = express()

logger.info('App Starting')

/**
 * Express Server Configuration
 */
app.disable('x-powered-by')
app.use(bodyParser.json({ type: 'application/json' }))

/*
 * Enable CORS
 */
app.use(cors())

/**
 * Express Routes
 */
app.use('/', routes.home)
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
)

export default app
