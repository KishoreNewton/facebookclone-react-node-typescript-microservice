import express from 'express'
import { json } from 'body-parser'
import { currentUserRouter } from './routes/current-user.router'
import { signinRouter } from './routes/signin.router'
import { signupRouter } from './routes/signup.router'
import { signoutRouter } from './routes/signout.router'

const app = express()
app.use(json())
app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.listen(3000, () => {
  console.log('listening on port 3000')
})