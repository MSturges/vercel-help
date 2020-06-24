const EmailTrack = (conn) => {
  if (conn.models.email_track) return conn.models.email_track

  const mongoose = require('mongoose')
  const moment = require('moment')
  const EmailTrack = new mongoose.Schema(
    {
      share_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      contact_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      email: {
        type: String,
        default: '',
      },
      first_name: {
        type: String,
        default: '',
      },
      last_name: {
        type: String,
        default: '',
      },
      full_name: {
        type: String,
        default: '',
      },
      status: {
        type: String,
        default: 'success',
        index: true,
      },
      opens: {
        type: Number,
        default: 0,
      },
      clicks: {
        type: Number,
        default: 0,
      },
      opened: {
        type: Number,
        default: 0,
      },
      clicked: {
        type: Number,
        default: 0,
      },
      response: {
        type: String,
        default: '',
      },
      sent_data: {
        type: mongoose.Schema.Types.Mixed,
      },
      error: {
        type: String,
        default: '',
      },
      timestamp: {
        type: Number,
        default: moment().unix() * 1000,
        index: true,
      },
      sent_at: {
        type: Date,
        index: true,
      },
      created_at: {
        type: Date,
        default: Date.now,
        index: true,
      },
    },
    { collection: 'email_track', versionKey: false }
  )

  EmailTrack.index({
    team_id: 1,
    status: 1,
    created_at: 1,
  })

  EmailTrack.index({
    email: 'text',
    first_name: 'text',
    last_name: 'text',
  })

  return conn.model('email_track', EmailTrack)
}

module.exports = EmailTrack
