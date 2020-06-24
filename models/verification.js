const Verification = conn => {
  if (conn.models.verification) return conn.models.verification

  const mongoose = require('mongoose')
  const Verification = new mongoose.Schema(
    {
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      created_at: {
        type: Date,
        default: Date.now
      },
      email: {
        type: String,
        default: ''
      },
      verification_code: {
        type: String,
        default: ''
      }
    },
    { collection: 'verification', versionKey: false }
  )
  Verification.index({ created_at: 1 }, { expireAfterSeconds: 604800 })

  return conn.model('verification', Verification)
}

module.exports = Verification
