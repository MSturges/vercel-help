import nextConnect from 'next-connect'
import database from './db'
import auth from './auth'

const middleware = nextConnect()
middleware.use(database).use(auth)

export default middleware