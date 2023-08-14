const express = require('express');
const router = express.Router();
const controller = require('../controller/menuController');

router.get('/', controller.showMenu)
router.get('/foodDetail', controller.loadFoodDetail)
router.get('/:id', controller.loadFoodByCategoryId)

module.exports = router;