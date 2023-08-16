const express = require('express');
const router = express.Router();
const controller = require('../controller/reservationController');

router.get('/', (req, res, next) => {
    let orderItems = req.session.orderItems ?? [];  
    res.render('reservation',{ orderItems:orderItems});
});

router.post('/', controller.saveReservation, controller.sendEmail);

module.exports = router;