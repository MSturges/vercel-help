const Category = conn => {
  if (conn.models.category) return conn.models.category

  const mongoose = require('mongoose')
  const Schema = new mongoose.Schema(
    {
      name: {
        type: String,
        default: ''
      },
      slug: {
        type: String,
        default: ''
      }
    },
    { collection: 'category', versionKey: false }
  )

  return conn.model('category', Schema)
}

module.exports = Category
