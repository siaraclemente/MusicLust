var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');

//POST Comments
router.post('/performs/:id/comments', commentsCtrl.addComment);

module.exports = router;