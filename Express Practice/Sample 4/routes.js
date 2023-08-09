const express = require('express');
const router = express.Router();
const handler = require('./handlers');

router.get('/', handler.showIndexPage);

router.post('/', handler.handlePost);

router.get('/history', handler.showHistory);

module.exports = router;