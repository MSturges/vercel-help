const User = conn => {
  if (conn.models.user) return conn.models.user

  const mongoose = require('mongoose')
  const User = new mongoose.Schema(
    {
      email: {
        type: String,
        index: true
      },
      username: {
        type: String,
        index: true
      },
      name: {
        type: String
      },
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      re_auth: {
        type: Boolean,
        default: false
      },
      force_logout: {
        type: Boolean,
        default: false
      },
      profile_image: {
        type: String,
        default: ''
      },
      teams: {
        type: Array,
        default: [],
        index: true
      },
      role: {
        type: String,
        default: 'owner',
        enum: ['owner', 'member'],
        index: true
      },
      original_owner: {
        type: Boolean,
        default: false
      },
      show_quick_guide: {
        type: Boolean,
        default: true
      },
      accepted_terms_privacy: {
        type: Boolean,
        default: false
      },
      status: {
        type: String,
        default: 'active',
        enum: ['active', 'inactive', 'pending'],
        index: true
      },
      start_guide_steps: {
         welcome_1:{
          type: Boolean,
          default: false
        },
         welcome_2:{
          type: Boolean,
          default: false
        },
        template_1: {
          type: Boolean,
          default: false
        },
        explore_1: {
          type: Boolean,
          default: false
        },
        explore_2: {
          type: Boolean,
          default: false
        },
        share_1: {
          type: Boolean,
          default: false
        },
        campaign_1: {
          type: Boolean,
          default: false
        },
        contact_1: {
          type: Boolean,
          default: false
        },
        userAndTeams_1: {
          type: Boolean,
          default: false
        },
        intergrations_1: {
          type: Boolean,
          default: false
        }
      },
      permissions: {
        edit_drafts: {
          type: Boolean,
          default: true,
        },
        create_drafts: {
          type: Boolean,
          default: true,
        }
      },
      email_triggers: {
        billing: {
          type: Boolean,
          default: true,
          index: true
        },
        social: {
          type: Boolean,
          default: true,
          index: true
        },
        drafts: {
          type: Boolean,
          default: true,
          index: true
        },
        shared: {
          type: Boolean,
          default: true,
          index: true
        },
        mail: {
          type: Boolean,
          default: true,
          index: true
        }
      },
      created_at: {
        type: Date,
        default: Date.now
      }
    },
    { collection: 'user', versionKey: false }
  )
  return conn.model('user', User)
}

module.exports = User
