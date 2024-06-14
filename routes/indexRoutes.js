const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.index_get);

router.get('/new', indexController.new_get);
router.post('/new', indexController.new_post);

module.exports = router;
