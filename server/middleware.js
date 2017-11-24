import passport from 'passport'
import session from 'express-session'
import bodyParser from 'body-parser'

export default [
  session({ secret: 'secret', cookie: { maxAge: 60000 } }),
  passport.initialize(),
  passport.session(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
]
