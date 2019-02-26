var Perform = require('../models/perform');

module.exports = {
  addComment
  
};

function addComment(req, res) {
    console.log('HELLO');
    Perform.findById(req.params.id,function(err, perform) {
    perform.comments.push(req.body);
    perform.save(function(err) {
      res.redirect('/performs');
    });
  });
}