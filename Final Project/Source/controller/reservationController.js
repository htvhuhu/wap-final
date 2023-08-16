const Reservation = require('../model/reservation');
const EmailHelper = require('../helper/emailHelper');
const ejs = require('ejs');

module.exports.saveReservation = (req, res, next) => {
    Reservation.addReservation(req.body).then(rows => {
        next();
    }).catch(err => {
        next(err);
    });
};

module.exports.sendEmail = (req, res, next) => {
    ejs.renderFile(__dirname + "/.." + "/views/reservationComplete-email-template.html", req.body, function (err, data) {
        if (err) {
            throw err;
        }
        EmailHelper.sendEmail(req.body.cusEmail, 'Reservation Confirmation', data);
    });
    res.render('reservationComplete', { ...req.body, orderItems: req.session.orderItems ?? [] });
};