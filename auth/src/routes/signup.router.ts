import express from 'express'

const router = express.Router()

router.post('/v1/api/users/signup', (req, res) => {
  const { email, password } = req.body
})

export { router as signupRouter }