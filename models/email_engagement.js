const EmailEngagement = conn => {
  if (conn.models.email_engagement) return conn.models.email_engagement

  const mongoose = require('mongoose')
  const moment = require('moment')
  const EmailEngagement = new mongoose.Schema(
    {
      share_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId
      },
      contact_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      open: {
        type: Number,
        default: 0
      },
      clicked_link: {
        type: String,
        default: ''
      },
      click: {
        type: Number,
        default: 0
      },
      timestamp: {
        type: Number,
        default: moment().unix() * 1000
      },
      created_at: {
        type: Date,
        default: Date.now,
        index: true
      }
    },
    { collection: 'email_engagement', versionKey: false }
  )

  return conn.model('email_engagement', EmailEngagement)
}

module.exports = EmailEngagement
