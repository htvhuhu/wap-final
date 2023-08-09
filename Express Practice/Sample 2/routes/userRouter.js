const express = require('express');
const router = express.Router();
const handlers = require('../module/handlers')

router.get('/', handlers.showIndexPage);

router.post('/post', handlers.handlePost);

router.get('/preview', handlers.showPreview);

module.exports = router;