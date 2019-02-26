var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');

//POST Comments
router.post('/performs/comments', commentsCtrl.addComment);

//DELETE Comments
//router.delete('/comments/:id', commentsCtrl.delComment);

module.exports = router;