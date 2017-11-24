import passport from 'passport'

import { google } from './auth'

const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

passport.use(new GoogleStrategy(
  google,
  (accessToken, refreshToken, profile, cb) => cb(null, profile)
))
