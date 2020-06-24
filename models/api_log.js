const ApiLog = conn => {
  if (conn.models.ApiLog) return conn.models.ApiLog

  const mongoose = require('mongoose')
  const ApiLog = new mongoose.Schema(
    {
      request: {
        type: mongoose.Schema.Types.Mixed,
        index: true
      },
      response: {
        type: mongoose.Schema.Types.Mixed
      },
      ref: {
        type: String
      },
      created_at: {
        type: Date,
        default: Date.now,
        index: true
      }
    },
    { collection: 'api_log', versionKey: false }
  )
  return conn.model('api_log', ApiLog)
}

module.exports = ApiLog
