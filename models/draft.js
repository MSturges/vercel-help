const Draft = conn => {
  if (conn.models.draft) return conn.models.draft

  const mongoose = require('mongoose')
  const Schema = new mongoose.Schema(
    {
      content_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      original_draft_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      html: {
        type: String,
        default: ''
      },
      doc: {
        type: String,
        default: ''
      },
      pdf: {
        type: String,
        default: ''
      },
      thumbnail: {
        type: String,
        default: ''
      },
      featured: {
        type: String,
        default: ''
      },
      social: {
        type: String,
        default: ''
      },
      social_description: {
        type: String,
        default: ''
      },
      seo_description: {
        type: String,
        default: ''
      },
      categories: {
        type: Array,
        default: []
      },
      personas: {
        type: Array,
        default: []
      },
      content_type: {
        type: String,
        default: ''
      },
      updated_at: {
        type: Date,
      },
      created_at: {
        type: Date,
        default: Date.now,
        index: true
      },
      video_url: {
        type: String,
        default: ''
      },
      video_image_preview_url: {
        type: String,
        default: ''
      },
      meta: {
        display_date: {
          type: String,
          default: ''
        },
        author: {
          type: String,
          default: ''
        },
        category: {
          type: String,
          default: ''
        }
      },
      display_at: {
        type: Date,
        default: Date.now
      },
      is_message: {
        type: Boolean,
        default: false
      },
      message_config: {
        type: {},
        default: false
      },
    },
    { collection: 'draft', versionKey: false }
  )

  Schema.index({
    title: 'text',
    description: 'text'
  })

  return conn.model('draft', Schema)
}

module.exports = Draft
