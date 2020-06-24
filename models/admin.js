const mongoose = require('mongoose')

const Admin = conn => {
  if (conn.models.user) return conn.models.user

  const AdminSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        index: true
      },
      password: {
        type: String,
        index: true
      },
      name: {
        type: String
      },
      created_at: {
        type: Date,
        default: Date.now
      }
    },
    { collection: 'admin', versionKey: false }
  )
  return conn.model('admin', AdminSchema)
}

module.exports = Admin
