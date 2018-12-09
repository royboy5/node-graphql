import path from 'path'
import requireAll from 'require-all'
import express from 'express'
import bodyParser from 'body-parser'

const utils = requireAll(path.join(__dirname, 'utils'))
const routes = requireAll(path.join(__dirname, 'routes'))
const log = utils.logger

const app = express()

log.info('App Starting')

/**
 * Express Server Configuration
 */
app.disable('x-powered-by')
app.use(bodyParser.json({ type: 'application/json' }))

/**
 * Express Routes
 */
app.use('/', routes.home)

module.exports = app