/* eslint-disable no-unused-vars */
/* eslint-disable no-return-await */
const mongoose = require('mongoose')
const promiseRetry = require('promise-retry')
const Models = require('../models')

let conn = null

/**
 * Get database connection from cache or connect
 */
const database = async (req, res, next) => {
  return await promiseRetry(
    async retry => {
      if (conn && conn.readyState === 1) {
        return {
          conn,
          Models: Models(conn)
        }
      }
      try {
        conn = await mongoose.createConnection(process.env.MONGO, {
          useNewUrlParser: true,
          useFindAndModify: false,
          useCreateIndex: true,
          bufferMaxEntries: 0,
          bufferCommands: false,
          socketTimeoutMS: 2000000,
          useUnifiedTopology: true
        })
        req.Models = Models(conn)
        next()
      } catch (e) {
        console.log('db e', e)
        return e
      }
    },
    { retries: 2 }
  )
}

module.exports = database
