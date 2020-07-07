/* eslint-disable no-return-await */
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {

  // console.log('get to auth middle')

  // login does not require jwt verification
  if (req.url === '/api/auth/login' || req.url === '/api/auth/signup') {
    // next middleware
    return next()
  }

  const token = req.headers.authorization

  // // Debug print
  // console.log('')
  // console.log(req.url)
  // console.log('authorization toke:', token)
  // console.log('')

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret)
    // console.log('decoded', decoded)
  } catch (err) {
    // Catch the JWT Expired or Invalid errors
    console.log('auth middle error', err)
    return res.status(401).json({ msg: err.message })
  }

  next()
}

module.exports = auth
