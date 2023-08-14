const express = require('express');
const router = express.Router();
const controller = require('../controller/reservationController');

router.get('/', (req, res, next) => {
    res.render('reservation');
});

router.post('/', controller.saveReservation);

module.exports = router;