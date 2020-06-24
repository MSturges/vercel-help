const ContactProfile = conn => {
  if (conn.models.contact_profile) return conn.models.contact_profile

  const mongoose = require('mongoose')
  const Schema = new mongoose.Schema(
    {
      email: {
        type: String,
        index: true
      },
      data: {
        type: mongoose.Schema.Types.Mixed
      },
      created_at: {
        type: Date,
        default: Date.now,
        //Expires in a month to fetch clean data
        expires: 2629746
      }
    },
    { collection: 'contact_profile', versionKey: false }
  )
  return conn.model('contact_profile', Schema)
}

module.exports = ContactProfile
