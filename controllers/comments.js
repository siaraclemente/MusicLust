var Perform = require('../models/perform');

module.exports = {
  create
};

function create(req, res) {
    console.log('HELLO');
    Perform.findOne(function(err, perform) {
    perform.comments.push(req.body);
    perform.save(function(err) {
      res.redirect('/performs');
    });
  });
}