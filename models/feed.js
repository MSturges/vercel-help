const Feed = conn => {
  if (conn.models.feed) return conn.models.feed

  const mongoose = require('mongoose')
  const Feed = new mongoose.Schema(
    {
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      type: {
        type: String
      },
      data: {
        type: mongoose.Schema.Types.Mixed
      },
      created_at: {
        type: Date,
        default: Date.now,
        index: true
      }
    },
    { collection: 'feed', versionKey: false }
  )
  return conn.model('feed', Feed)
}

module.exports = Feed
