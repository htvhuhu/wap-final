const nodemailer = require('nodemailer');
const config = require('../config');

class Email {
    constructor() {
        this.transporter = nodemailer.createTransport(config.emailConfig);
    }
    
    sendEmail(mailTo, subject, data) {
        const emailOptions = config.emailOptions;
        emailOptions.to = mailTo;
        emailOptions.subject = subject;
        emailOptions.html = data;

        this.transporter.sendMail(emailOptions, (error, info) => {
            if (error) {
                throw error;
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

module.exports = new Email();