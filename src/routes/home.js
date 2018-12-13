import { logger as log } from '../utils'
import express from 'express'

const router = new express.Router()

router.get('/', (req, res) => {
  log.info('Accessed /')
  res.json({ page: 'Home' })
})

export default router
