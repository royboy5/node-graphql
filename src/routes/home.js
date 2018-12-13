import log from '../utils/logger'
import express from 'express'

const router = new express.Router()

router.get('/', (req, res) => {
  log.info('Accessed /')
  res.json({ page: 'Home' })
})

module.exports = router
