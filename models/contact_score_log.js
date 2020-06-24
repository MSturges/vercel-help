const ContactScoreLog = conn => {
  if (conn.models.contact_score_log) return conn.models.contact_score_log

  const mongoose = require('mongoose')
  const Schema = new mongoose.Schema(
    {
      contact_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      action: {
        type: String,
        default: ''
      },
      previous_scores: {
        type: mongoose.Schema.Types.Mixed
      },
      new_scores: {
        type: mongoose.Schema.Types.Mixed
      },
      created_at: {
        type: Date,
        default: Date.now
      }
    },
    { collection: 'contact_score_log', versionKey: false }
  )
  return conn.model('contact_score_log', Schema)
}

module.exports = ContactScoreLog
