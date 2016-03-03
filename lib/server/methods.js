Meteor.methods({
    /**
     * sendEmail function
     * @param to String
     * @param from String
     * @param subject String
     * @param html String
     * @returns void
     */
    sendMail: function (to, from, subject, html) {
        check([to, from, subject], [String])
        this.unblock()
        Email.send({
            to: to,
            from: from,
            subject: subject,
            html: html
        })
    }
})