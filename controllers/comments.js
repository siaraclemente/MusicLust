var Perform = require('../models/perform');

module.exports = {
  addComment
  //delComment
  
};

function addComment(req, res) {
    console.log('HELLO');
    Perform.findOne({},function(err, perform) {
    perform.comments.push(req.body);
    perform.save(function(err) {
      res.redirect('/performs');
    });
  });
}

// function delComment(req, res, next) {
//     Perform.findOne({'comments._id': req.params.id}, function(err, perform) {
//       perform.comments.id(req.params.id).remove();
//       perform.save(function(err) {
//         res.redirect('/performs');
//       });
//     });
//   }