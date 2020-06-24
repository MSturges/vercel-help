const SharedArchive = conn => {
  if (conn.models.shared_archive) return conn.models.shared_archive

  const mongoose = require('mongoose')
  const SharedArchive = new mongoose.Schema(
    {
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      archive: {
        type: mongoose.Schema.Types.Mixed
      },
      created_at: {
        type: Date,
        default: Date.now,
        index: true
      }
    },
    { collection: 'shared_archive', versionKey: false }
  )
  return conn.model('shared_archive', SharedArchive)
}

module.exports = SharedArchive
