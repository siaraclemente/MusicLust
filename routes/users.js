var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /students
router.get('/users', usersCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/performs/:id/comments', isLoggedIn, users.createComment);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
  module.exports = router;