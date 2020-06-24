const Campaign = (conn) => {
  if (conn.models.campaign) return conn.models.campaign

  const mongoose = require('mongoose')
  const Schema = new mongoose.Schema(
    {
      name: {
        type: String,
        default: '',
      },
      campaign_image: {
        type: String,
        default: '',
      },
      short_description: {
        type: String,
        default: '',
      },
      summary: {
        type: String,
        default: '',
      },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      status: {
        type: String,
        default: 'inactive',
        index: true,
      },
      archived: {
        type: Boolean,
        default: false,
        index: true,
      },
      requires_fix: {
        type: Boolean,
        default: false
      },
      from_template: {
        type: Boolean,
        default: false
      },
      published: {
        type: Boolean,
        default: false
      },
      template_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      start_date: {
        type: Date,
        default: null,
        index: true,
      },
      created_at: {
        type: Date,
        default: Date.now,
        index: true,
      },
      updated_at: {
        type: Date,
        default: Date.now,
        index: true,
      },
      completed_at: {
        type: Date,
        index: true,
      },
      time_zone: {
        type: String,
        default: 'America/New_York',
        index: true,
      },
    },
    { collection: 'campaign', versionKey: false }
  )

  Schema.index({ team_id: 1, name: 1 }, { unique: true })

  Schema.index({
    name: 'text',
  })

  return conn.model('campaign', Schema)
}

module.exports = Campaign
