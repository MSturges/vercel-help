const Shared = (conn) => {
  if (conn.models.shared) return conn.models.shared

  const mongoose = require('mongoose')
  const Schema = new mongoose.Schema(
    {
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      draft_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      content_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      campaign_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      campaign_event_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      
      meta: {
        display_date: {
          type: String,
          default: '',
        },
        author: {
          type: String,
          default: '',
        },
        category: {
          type: String,
          default: '',
        },
      },
      slug: {
        type: String,
        unique: true,
        index: true,
      },
      title: {
        type: String,
      },
      title_slug: {
        type: String,
      },
      template: {
        type: mongoose.Schema.Types.Mixed,
      },
      submission: {
        facebook: {
          type: mongoose.Schema.Types.Mixed,
        },
        twitter: {
          type: mongoose.Schema.Types.Mixed,
        },
        linkedin: {
          type: mongoose.Schema.Types.Mixed,
        },
      },
      facebook: {
        title: {
          type: String,
          default: '',
        },
        message: {
          type: String,
          default: '',
        },
        description: {
          type: String,
          default: '',
        },
        share_image: {
          type: String,
          default: '',
        },
        shared: {
          type: Boolean,
          default: false,
        },
        share_image: {
          type: String,
          default: '',
        },
        active: {
          type: Boolean,
          default: false,
        },
        page_id: {
          type: String,
          default: '',
        },
        response: {
          type: mongoose.Schema.Types.Mixed,
        },
      },
      twitter: {
        title: {
          type: String,
          default: '',
        },
        message: {
          type: String,
          default: '',
        },
        description: {
          type: String,
          default: '',
        },
        share_image: {
          type: String,
          default: '',
        },
        shared: {
          type: Boolean,
          default: false,
        },
        active: {
          type: Boolean,
          default: false,
        },
        response: {
          type: mongoose.Schema.Types.Mixed,
        },
      },
      linkedin: {
        title: {
          type: String,
          default: '',
        },
        message: {
          type: String,
          default: '',
        },
        description: {
          type: String,
          default: '',
        },
        share_image: {
          type: String,
          default: '',
        },
        shared: {
          type: Boolean,
          default: false,
        },
        active: {
          type: Boolean,
          default: false,
        },
        response: {
          type: mongoose.Schema.Types.Mixed,
        },
      },
      email: {
        title: {
          type: String,
          default: '',
        },
        subject: {
          type: String,
          default: '',
        },
        excerpt: {
          type: String,
          default: '',
        },
        featured: {
          type: String,
          default: '',
        },
        description: {
          type: String,
          default: '',
        },
        preview_text: {
          type: String,
          default: '',
        },
        shared: {
          type: Boolean,
          default: false,
        },
        active: {
          type: Boolean,
          default: false,
        },
        to: {
          type: Object,
          default: {},
        },
        link_count: {
          type: Number,
          default: 0,
        },
        emails: {
          type: Array,
          default: [],
        },
        response: {
          type: mongoose.Schema.Types.Mixed,
        },
      },
 
      result: mongoose.Schema.Types.Mixed,
      stats: {
        impressions: {
          total: {
            type: Number,
            default: 0,
          },
        },
        leads: {
          total: {
            type: Number,
            default: 0,
          },
        },
        email: {
          opens: {
            type: Number,
            default: 0,
          },
          clicks: {
            type: Number,
            default: 0,
          },
          sends: {
            type: Number,
            default: 0,
          },
        },
      },
      schedule: {
        is_scheduled: {
          type: Boolean,
          default: false,
          index: true,
        },
        state: {
          type: String,
          default: 'queued',
        },
        scheduled_at: {
          type: Date,
          index: true,
        },
        completed_at: {
          type: Date,
        },
        shared_response: {
          type: mongoose.Schema.Types.Mixed,
        },
      },
      content: {
        type: mongoose.Schema.Types.Mixed,
      },
      manual_share: {
        type: Boolean,
        default: false,
      },
      active: {
        type: Boolean,
        default: true,
        index: true,
      },
      is_message: {
        type: Boolean,
        default: false,
        index: true,
      },
      rss_feed: {
        type: Boolean,
        default: true,
        index: true,
      },
      list_target_id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      enableContentBlock: {
        type: Boolean,
        default: false,
      },
      created_at: {
        type: Date,
        default: Date.now,
        index: true,
      },
      shared_at: {
        type: Date,
        index: true,
      },
    },
    { collection: 'shared', versionKey: false }
  )

  Schema.index({
    'content.title': 'text',
  })
  return conn.model('shared', Schema)
}

module.exports = Shared
