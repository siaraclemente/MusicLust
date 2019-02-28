const User = require('../models/users');

module.exports = {
  createComment
};

function createComment(req, res, next) {
    req.user.facts.push(req.body);
    req.user.save(function(err) {
      res.redirect('/performs');
    });
  }

