const nodemailer = require('nodemailer');

class Email {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '111d00111@mail.cjcu.edu.tw',
                pass: 'HuanHuan'
            }
        });
    }
    
    sendEmail(mailTo, subject, data) {
        const mailOptions = {
            from: '111d00111@mail.cjcu.edu.tw',
            to: mailTo,
            subject: subject,
            html: data
        };

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw error;
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

module.exports = new Email();