const CampaignEvent = (conn) => {
  if (conn.models.campaign_event) return conn.models.campaign_event

  const mongoose = require('mongoose')
  const Schema = new mongoose.Schema(
    {
      campaign_id: {
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
      company_id: {
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
      share_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
      },
      is_message: {
        type: Boolean,
        default: false
      },
      result: {
        type: Object,
        default: {},
      },
      error_data: {
        type: Object,
        default: {},
      },
      status: {
        type: String,
        default: 'queued',
        index: true,
      },
      template_networks: {
        type: Array,
        default: []
      },
      content: {
        title: {
          type: String,
          default: '',
        },
        description: {
          type: String,
          default: '',
        },
        html: {
          type: String,
          default: '',
        },
        social_description: {
          type: String,
          default: '',
        },
        seo_description: {
          type: String,
          default: '',
        },
        content_type: {
          type: String,
          default: '',
        },
        thumbnail: {
          type: String,
          default: '',
        },
      },
      social: {
        facebook: {
          title: {
            type: String,
            default: '',
          },
          message: {
            type: String,
            default: '',
          },
          subject: {
            type: String,
            default: '',
          },
          primary: {
            type: Object,
            default: {},
          },
          access_token: {
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
          active: {
            type: Boolean,
            default: false,
          },
          page_id: {
            type: String,
            default: '',
          },
          page_image: {
            type: String,
            default: '',
          },
          page_name: {
            type: String,
            default: '',
          },
          shared: {
            type: Boolean,
            default: false,
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
          subject: {
            type: String,
            default: '',
          },
          active: {
            type: Boolean,
            default: false,
          },
          oauth_token: {
            type: String,
            default: '',
          },
          oauth_token_secret: {
            type: String,
            default: '',
          },
          user_id: {
            type: String,
            default: '',
          },
          screen_name: {
            type: String,
            default: '',
          },
          display_name: {
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
          subject: {
            type: String,
            default: '',
          },
          active: {
            type: Boolean,
            default: false,
          },
          expires_at: {
            type: String,
            default: '',
          },
          access_token: {
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
        },
        email: {
          title: {
            type: String,
            default: '',
          },
          message: {
            type: String,
            default: '',
          },
          subject: {
            type: String,
            default: '',
          },
          html: {
            type: String,
            default: ''
          },
          subuser: {
            type: Object,
            default: {},
          },
          branding: {
            type: Object,
            default: {},
          },
          domain: {
            type: Object,
            default: {},
          },
          sender: {
            type: String,
            default: '',
          },
          sender_name: {
            type: String,
            default: '',
          },
          bcc: {
            type: String,
            default: '',
          },
          valid: {
            type: Boolean,
            default: false,
          },
          enabled: {
            type: Boolean,
            default: false,
          },
          validated_email_address: {
            type: Boolean,
            default: false,
          },
          dns: {
            type: Object,
            default: {},
          },
          excerpt: {
            type: String,
            default: '',
          },
          preview_text: {
            type: String,
            default: '',
          },
          featured: {
            type: String,
            default: '',
          },
          active: {
            type: Boolean,
            default: false,
          },
          to: {
            type: Array,
          },
          shared: {
            type: Boolean,
            default: false,
          },
        },
      },
      list_target_id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      enableContentBlock: {
        type: Boolean,
        default: false,
      },
      day: {
        type: Number,
        default: 1,
      },
      scheduled_at: {
        type: Date,
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
        default: null,
      },
      time: {
        type: String,
        default: '09:00',
        index: true,
      },
      time_zone: {
        type: String,
        default: 'America/New_York',
        index: true,
      },
    },
    { collection: 'campaign_event', versionKey: false }
  )

  return conn.model('campaign_event', Schema)
}

module.exports = CampaignEvent
