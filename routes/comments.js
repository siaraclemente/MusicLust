var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');

router.post('/performs/comments', commentsCtrl.create);

module.exports = router;