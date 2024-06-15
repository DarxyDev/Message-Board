const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.index_get);

// router.get('/new', indexController.new_get);
// router.post('/new', indexController.new_post);

router.get('/chat', indexController.chat_get);
router.post('/chat', indexController.chat_post);

module.exports = router;
