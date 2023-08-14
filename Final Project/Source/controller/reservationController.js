const Reservation = require('../model/reservation');

exports.validate = (req, res, next) => {
    next();
};

exports.saveReservation = (req, res, next) => {
    Reservation.addReservation(req.body);
    res.render('reservationComplete');
};