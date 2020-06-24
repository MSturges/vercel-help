const Track = conn => {
  if (conn.models.track) return conn.models.track

  const mongoose = require('mongoose')
  const moment = require('moment')
  const Track = new mongoose.Schema(
    {
      share_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      content_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      title: {
        type: String
      },
      title_slug: {
        type: String
      },
      categories: {
        type: Array
      },
      network: {
        type: String
      },
      referer: {
        type: String
      },
      slug: {
        type: String
      },
      ip: {
        type: String
      },
      ua: {
        type: mongoose.Schema.Types.Mixed
      },
      geo: {
        country_code: {
          type: String
        },
        country_name: {
          type: String
        },
        region_code: {
          type: String,
          index: true
        },
        region_name: {
          type: String
        },
        city: {
          type: String,
          index: true
        },
        zip: {
          type: String
        },
        latitude: {
          type: Number
        },
        longitude: {
          type: Number
        }
      },
      minute_timestamp: {
        type: Number,
        default:
          moment()
            .startOf('minute')
            .unix() * 1000
      },
      timestamp: {
        type: Number,
        default: moment().unix() * 1000,
        index: true
      },
      created_at: {
        type: Date,
        default: Date.now,
        index: true
      }
    },
    { collection: 'track', versionKey: false }
  )
  return conn.model('track', Track)
}

module.exports = Track
