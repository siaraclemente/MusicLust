var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email'] }
 ));
 
 router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/performs',
    failureRedirect: '/'
  }
 ));

 router.get('/logout', function(req, res){
   req.logout();
   res.redirect('/performs');
 });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
