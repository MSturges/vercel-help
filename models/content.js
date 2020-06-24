const Content = (conn) => {
  if (conn.models.content) return conn.models.content

  const mongoose = require('mongoose')
  const Schema = new mongoose.Schema(
    {
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
      doc: {
        type: String,
        default: '',
      },
      pdf: {
        type: String,
        default: '',
      },
      thumbnail: {
        type: String,
        default: '',
      },
      featured: {
        type: String,
        default: '',
      },
      content_type: {
        type: String,
        default: '',
      },
      social: {
        type: String,
        default: '',
      },
      social_description: {
        type: String,
        default: '',
      },
      video_image_preview_url: {
        type: String,
        default: '',
      },
      video_url: {
        type: String,
        default: '',
      },
      seo_description: {
        type: String,
        default: '',
      },
      state: {
        type: String,
        default: 'active',
        index: true,
      },
      categories: {
        type: Array,
        default: [],
        index: true,
      },
      personas: {
        type: Array,
        default: [],
        index: true,
      },
      editable: {
        type: Boolean,
        default: true,
      },
      source: {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
        },
        provider: {
          type: String,
        },
      },
      created_at: {
        type: Date,
        default: Date.now,
        index: true,
      },
    },
    { collection: 'content', versionKey: false }
  )

  Schema.index(
    {
      title: 'text',
      description: 'text',
    },
    {
      default_language: 'none',
    }
  )

  return conn.model('content', Schema)
}

module.exports = Content
