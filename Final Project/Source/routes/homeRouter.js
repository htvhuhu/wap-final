const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    let orderItems = req.session.orderItems ?? [];  
    res.render('index',{ orderItems:orderItems});
})

module.exports = router;