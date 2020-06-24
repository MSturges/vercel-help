const SocialSchema = {
  twitter: {
    user_id: String,
    display_name: String,
    screen_name: String,
    oauth_token: String,
    oauth_token_secret: String,
    active: {
      type: Boolean,
      default: false
    }
  },
  facebook: {
    name: {
      type: String
    },
    primary: {
      id: {
        type: Number
      }
    },
    access_token: String,
    active: {
      type: Boolean,
      default: false
    }
  },
  linkedin: {
    name: {
      type: String
    },
    expires_at: {
      type: Date
    },
    id: {
      type: String
    },
    access_token: String,
    active: {
      type: Boolean,
      default: false
    }
  }
}

module.exports = SocialSchema
