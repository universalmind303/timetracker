/*
 * Middleware for handling server errors
 */

export default [
  // 404
  (req, res, next) => {
    const err = new Error('ERROR 404 Sorry can\'t find what you\'re looking for!')
    err.status = 404
    next(err)
  },
  // 500
  (err, req, res) => {
    console.log('UNKNOWN ERROR')
    console.log(err.stack)
    const status = err.status || 500
    res.status(status).send(err.message)
  }
]
