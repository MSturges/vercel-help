const ContactList = conn => {
  if (conn.models.contact_list) return conn.models.contact_list

  const mongoose = require('mongoose')

  const ContactList = new mongoose.Schema(
    {
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      name: {
        type: String,
        index: true
      },
      contacts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'contact'
        }
      ],
      created_at: {
        type: Date,
        default: Date.now,
        index: true
      }
    },
    { collection: 'contact_list', versionKey: false }
  )

  ContactList.index({ team_id: 1, name: 1 }, { unique: true })

  ContactList.index({
    name: 'text'
  })

  return conn.model('contact_list', ContactList)
}

module.exports = ContactList
