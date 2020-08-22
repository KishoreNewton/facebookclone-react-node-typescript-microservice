import express from 'express'

const router = express.Router()

router.post('/v1/api/users/enabletwofa', (req, res) => {
  res.send('Hi there!')
})

export { router as twoFactor }