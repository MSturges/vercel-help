const Segment = conn => {
  if (conn.models.segment) return conn.models.segment

  const mongoose = require('mongoose')

  const Segment = new mongoose.Schema(
    {
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      name: {
        type: String,
        index: true
      },
      type: {
        type: String,
        default: 'all',
        index: true
      },
      rules: [
        {
          type: {
            type: String
          },
          operator: {
            type: String
          },
          value: {
            type: String
          }
        }
      ],
      created_at: {
        type: Date,
        default: Date.now,
        index: true
      }
    },
    { collection: 'segment', versionKey: false }
  )

  Segment.index({ team_id: 1, name: 1 }, { unique: true })

  Segment.index({
    name: 'text',
    type: 'text'
  })
  
  return conn.model('segment', Segment)
}

module.exports = Segment
