const Company = conn => {
  if (conn.models.company) return conn.models.company

  const mongoose = require('mongoose')
  const moment = require('moment')

  const Schema = new mongoose.Schema(
    {
      name: {
        type: String,
        default: ''
      },
      billing: {
        customer_id: {
          type: Number
        }
      },
      timezone: {
        type: String,
        default: 'America/New_York'
      },
      contact_tags: {
        type: Array,
        default: []
      },
      timestamp: {
        type: Number,
        default: moment().unix() * 1000
      },
      ref: {
        type: String,
        default: ''
      },
      ambassador_code: {
        type: String,
        default: ''
      },
      status: {
        type: String,
        default: 'active'
      },
      permissions: {
        CONTENT_EDITING: {
          type: Boolean,
          default: true
        },
        SOCIAL_MESSAGING_EDITING: {
          type: Boolean,
          default: true
        },
        SOCIAL_ACCOUNTS: {
          type: Boolean,
          default: true
        },
        BILLING: {
          type: Boolean,
          default: true
        },
        INTEGRATION_REDTAIL: {
          type: Boolean,
          default: true
        },
        INTEGRATION_WEALTHBOX: {
          type: Boolean,
          default: true
        },
        CONTENT_TYPE_VIDEO: {
          type: Boolean,
          default: true
        },
        CONTENT_TYPE_EDITORIAL: {
          type: Boolean,
          default: true
        },
        CONTENT_TYPE_QUIZZES: {
          type: Boolean,
          default: true
        },
        CONTENT_TYPE_INFOGRAPHIC: {
          type: Boolean,
          default: true
        },
        CAMPAIGNS: {
          type: Boolean,
          default: true
        },
        SEGMENTS: {
          type: Boolean,
          default: true
        }
      },
      created_at: {
        type: Date,
        default: Date.now
      }
    },
    { collection: 'company', versionKey: false }
  )

  return conn.model('company', Schema)
}

module.exports = Company
