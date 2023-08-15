const express = require('express');
const router = express.Router();
const controller = require('../controller/menuController');

router.get('/', controller.showMenu)
router.get('/dish/:id', controller.loadDishDetail)
router.get('/:id', controller.loadDishByCategoryId)
router.post('/comment', controller.addComment)
module.exports = router;