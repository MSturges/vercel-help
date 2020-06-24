const Contact = conn => {
  if (conn.models.contact) return conn.models.contact

  const mongoose = require('mongoose')
  const moment = require('moment')

  const Schema = new mongoose.Schema(
    {
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      first_name: {
        type: String,
        default: ''
      },
      last_name: {
        type: String,
        default: ''
      },
      full_name: {
        type: String,
        default: ''
      },
      company: {
        type: String,
        default: ''
      },
      email: {
        type: String,
        default: ''
      },
      company_name: {
        type: String,
        default: ''
      },
      profile_image: {
        type: String,
        default: ''
      },
      profile_color: {
        type: String,
        default: '#7f8c8d'
      },
      dob: {
        type: Date,
      },
      type: {
        type: String,
        default: 'lead'
      },
      phone: {
        home: {
          type: String,
          default: ''
        },
        work: {
          type: String,
          default: ''
        },
        mobile: {
          type: String,
          default: ''
        }
      },
      scores: {
        sends: {
          type: Number,
          default: 0
        },
        opens: {
          type: Number,
          default: 0
        },
        clicks: {
          type: Number,
          default: 0
        },
        failed: {
          type: Number,
          default: 0
        },
        score: {
          type: Number,
          default: 40
        },
        rating: {
          type: Number,
          default: 0
        }
      },
      address: {
        address_line1: {
          type: String,
          default: ''
        },
        address_line2: {
          type: String,
          default: ''
        },
        city: {
          type: String,
          default: ''
        },
        state: {
          type: String,
          default: ''
        },
        zipcode: {
          type: String,
          default: ''
        },
        country_iso: {
          type: String,
          default: ''
        }
      },
      address_string: {
        type: String,
        default: '',
        index: true
      },
      notes: {
        type: String,
        default: ''
      },
      tags: {
        type: Array,
        default: []
      },
      source: {
        share_id: {
          type: mongoose.Schema.Types.ObjectId
        },
        slug: {
          type: String,
          default: ''
        },
        network: {
          type: String,
          default: ''
        },
        referer: {
          type: String,
          default: ''
        },
        title: {
          type: String,
          default: ''
        },
        title_slug: {
          type: String,
          default: ''
        },
        categories: {
          type: Array,
          default: []
        },
        type: {
          type: String,
          default: ''
        }
      },
      ip_address: {
        type: String,
        default: ''
      },
      subscribed: {
        type: Boolean,
        default: true
      },
      created_at: {
        type: Date,
        default: Date.now,
        index: true
      },
      timestamp: {
        type: Number,
        default: moment().unix() * 1000,
        index: true
      },
      updated_at: {
        type: Date,
        index: true
      },
      subscribed_at: {
        type: Date
      },
      unsubscribed_at: {
        type: Date
      },
      integrations: {
        redtail: {
          contact_id: {
            type: String,
            default: ''
          }
        },
        riskalyze: {
          contact_id: {
            type: String,
            default: ''
          },
          risk_number: {
            type: Number
          }
        },
        wealthbox: {
          contact_id: {
            type: String,
            default: ''
          }
        }
      }
    },
    { collection: 'contact', versionKey: false }
  )
  Schema.index({ team_id: 1, email: 1 }, { unique: true })

  Schema.index({
    email: 'text',
    first_name: 'text',
    last_name: 'text'
  })

  return conn.model('contact', Schema)
}

module.exports = Contact
