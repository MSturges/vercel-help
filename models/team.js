const Team = conn => {
  if (conn.models.team) return conn.models.team

  const mongoose = require('mongoose')
  const SocialSchema = require('./schemas/social')
  const moment = require('moment')

  const Schema = new mongoose.Schema(
    {
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      name: {
        type: String,
        default: 'General'
      },
      description: {
        type: String,
        default: 'General Team,  can not be deleted'
      },
      image: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      selectedIcon: {
        type: String,
        enum: ['color', 'image'],
        default: 'color'
      },
      type: {
        default: 'default',
        enum: ['default', 'custom'],
        type: String
      },
      social: SocialSchema,
      mail: {
        subuser: {
          username: {
            type: String,
            default: '',
            index: true
          },
          id: {
            type: Number,
            default: null
          },
          password: {
            type: String,
            default: null
          },
          api_key: {
            type: String,
            default: null
          }
        },
        branding: {
          logo_image: {
            type: String,
            default: ''
          },
          logo_image_width: {
            type: String,
            default: '150'
          },
          logo_image_height: {
            type: String,
            default: 'auto'
          },
          logo_title: {
            type: String,
            default: 'Acme Co.'
          },
          logo_tagline: {
            type: String,
            default: 'Our Awesome Tagline'
          },
          body_bg: {
            type: String,
            default: '#F5F8FF'
          },
          header_bg: {
            type: String,
            default: '#2B2C5A'
          },
          header_color: {
            type: String,
            default: '#F5F8FF'
          },
          content_bg: {
            type: String,
            deafult: '#FFFFFF'
          },
          content_headline: {
            type: String,
            default: '#2B2C5A'
          },
          content_color: {
            type: String,
            default: '#565768'
          },
          button_color: {
            type: String,
            default: '#8040FF'
          },
          footer_color: {
            type: String,
            default: '#565768'
          },
          footer_html: {
            type: String,
            default: ''
          },
          address: {
            type: String,
            default: ''
          }
        },
        domain: {
          name: {
            type: String,
            default: ''
          },
          id: {
            type: Number,
            default: null
          }
        },
        sender: {
          type: String,
          default: ''
        },
        sender_name: {
          type: String,
          default: ''
        },
        bcc: {
          type: String,
          default: ''
        },
        dns: {
          type: Object,
          default: {}
        },
        valid: {
          type: Boolean,
          default: false
        },
        enabled: {
          type: Boolean,
          default: false
        },
        validated_email_address: {
          type: Boolean,
          default: false
        }
      },
      integrations: {
        redtail: {
          user_key: {
            type: String,
            default: ''
          },
          enabled: {
            type: Boolean,
            default: false
          },
          autoImport: {
            type: Boolean,
            default: false
          },
          lastImport: {
            type: Date,
            default: null
          },
          addNewLeads: {
            type: Boolean,
            default: false
          },
          import: {
            started_at: Date,
            ended_at: Date,
            status: {
              type: String,
              enum: ['inactive', 'active', 'complete'],
              default: 'inactive'
            },
            response: {
              imported: {
                contactsImported: {
                  type: Number,
                  default: 0
                },
                contactsFound: {
                  type: Number,
                  default: 0
                }
              },
              error: String
            }
          }
        },
        riskalyze: {
          auth_code: {
            type: String,
            default: ''
          },
          token: {
            type: String,
            default: ''
          },
          refresh_token: {
            type: String,
            default: ''
          },
          clients_type: {
            type: String,
            default: 'LEAD'
          },
          enabled: {
            type: Boolean,
            default: false
          },
          importRiskNumbers: {
            type: Boolean,
            default: false
          },
          autoImport: {
            type: Boolean,
            default: false
          },
          lastImport: {
            type: Date,
            default: null
          },
          addNewLeads: {
            type: Boolean,
            default: false
          },
          import: {
            started_at: Date,
            ended_at: Date,
            status: {
              type: String,
              enum: ['inactive', 'active', 'complete'],
              default: 'inactive'
            },
            response: {
              imported: {
                contactsImported: {
                  type: Number,
                  default: 0
                },
                contactsFound: {
                  type: Number,
                  default: 0
                }
              },
              error: String
            }
          }
        },
        wealthbox: {
          api_access_token: {
            type: String,
            default: ''
          },
          enabled: {
            type: Boolean,
            default: false
          },
          autoImport: {
            type: Boolean,
            default: false
          },
          lastImport: {
            type: Date,
            default: null
          },
          addNewLeads: {
            type: Boolean,
            default: false
          },
          import: {
            started_at: Date,
            ended_at: Date,
            status: {
              type: String,
              enum: ['inactive', 'active', 'complete'],
              default: 'inactive'
            },
            response: {
              imported: {
                contactsImported: {
                  type: Number,
                  default: 0
                },
                contactsFound: {
                  type: Number,
                  default: 0
                }
              },
              error: String
            }
          }
        }
      },
      permissions: {
        CONTENT_EDITING: {
          type: Boolean
        },
        SOCIAL_MESSAGING_EDITING: {
          type: Boolean
        },
        SOCIAL_ACCOUNTS: {
          type: Boolean
        },
        BILLING: {
          type: Boolean
        },
        INTEGRATION_REDTAIL: {
          type: Boolean
        },
        INTEGRATION_WEALTHBOX: {
          type: Boolean
        },
        CONTENT_TYPE_VIDEO: {
          type: Boolean
        },
        CONTENT_TYPE_EDITORIAL: {
          type: Boolean
        },
        CONTENT_TYPE_QUIZZES: {
          type: Boolean
        },
        CONTENT_TYPE_INFOGRAPHIC: {
          type: Boolean
        },
        CAMPAIGNS: {
          type: Boolean
        },
        SEGMENTS: {
          type: Boolean
        }
      },
      timezone: {
        type: String,
        default: 'America/New_York'
      },
      timestamp: {
        type: Number,
        default: moment().unix() * 1000
      },
      created_at: {
        type: Date,
        default: Date.now
      }
    },
    { collection: 'team', versionKey: false }
  )
  return conn.model('team', Schema)
}

module.exports = Team
