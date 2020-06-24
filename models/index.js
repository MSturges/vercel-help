const models = conn => {
  return {
    Admin: require('./admin')(conn),
    Company: require('./company')(conn),
    Team: require('./team')(conn),
    User: require('./user')(conn),
    Content: require('./content')(conn),
    Category: require('./category')(conn),
    Shared: require('./shared')(conn),
    SharedArchive: require('./shared_archive')(conn),
    Draft: require('./draft')(conn),
    Contact: require('./contact')(conn),
    ContactList: require('./contact_list')(conn),
    Track: require('./track')(conn),
    Feed: require('./feed')(conn),
    EmailTrack: require('./email_track')(conn),
    EmailEngagement: require('./email_engagement')(conn),
    ContactHistory: require('./contact_history')(conn),
    ContactProfile: require('./contact_profile')(conn),
    Template: require('./template')(conn),
    Segment: require('./segment')(conn),
    Campaign: require('./campaign')(conn),
    CampaignEvent: require('./campaign_event')(conn),
    ContactScoreLog: require('./contact_score_log')(conn),
    Verification: require('./verification')(conn)
  }
}

module.exports = models
