import express from 'express'
import passport from 'passport'

import './passport'

const router = express.Router()

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile'] })
)

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => res.redirect('/graphiql')
)

router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['profile'] })
)

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => res.redirect('/graphiql')
)

export default router
