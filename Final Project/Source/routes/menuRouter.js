const express = require('express');
const router = express.Router();
const controller = require('../controller/menuController');

router.get('/', controller.showMenu)
router.get('/foodDetail', controller.foodDetail)
router.get('/:id', controller.foodByCategoryId)

module.exports = router;