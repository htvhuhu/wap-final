const Reservation = require('../model/reservation');

module.exports.saveReservation = (req, res, next) => {
    Reservation.addReservation(req.body).then(rows => {
        res.render('reservationComplete', req.body);
    }).catch(err => {
        next(err);
    });
};