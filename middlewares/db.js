const { MongoClient } = require('mongodb')

let db
const database = async (req, res, next) => {
  if (db && db.readyState === 1) {
    return {
      db
    }
  }
  try {
    const client = await new MongoClient.connect(process.env.MONGO, {
      useNewUrlParser: true,
      poolSize: 5
    })
    db = client.db('admin')


    console.log('db', db)

    req.db = db

    next()
  } catch (e) {
    console.error(e)
  }
}

module.exports = database
