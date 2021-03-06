const mongoose = require('mongoose')

const Admin = conn => {
  if (conn.models.admin) return conn.models.admin

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
      verified: {
        type: Boolean,
        default: false
      },
      created_at: {
        type: Date,
        default: Date.now
      }
    },
    { collection: 'admin_user', versionKey: false }
  )
  AdminSchema.index({ email: 1 }, { unique: true })

  return conn.model('admin', AdminSchema)
}

module.exports = Admin
