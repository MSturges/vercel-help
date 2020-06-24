const ContactHistory = conn => {
  if (conn.models.contact_history) return conn.models.contact_history

  const mongoose = require('mongoose')

  const Schema = new mongoose.Schema(
    {
      contact_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      share_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      type: {
        type: String,
        index: true
      },
      status: {
        type: String
      },
      data: {
        type: mongoose.Schema.Types.Mixed
      },
      created_at: {
        type: Date,
        default: Date.now
      }
    },

    { collection: 'contact_history', versionKey: false }
  )

  return conn.model('contact_history', Schema)
}

module.exports = ContactHistory
