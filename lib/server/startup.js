Meteor.startup(function() {
    process.env.MAIL_URL = process.env.MAIL_URL ? process.env.MAIL_URL : Meteor.settings.mail_url

    if(!process.env.MAIL_URL)
        console.log('No MAIL_URL set, please use process.env.MAIL_URL or settings.json to define MAIL_URL')

    // Accounts
    if(Package['Accounts']) {
	    Accounts.emailTemplates.from = Meteor.settings.noreply
	    Accounts.emailTemplates.sitename = Meteor.settings.app_name
    }
})