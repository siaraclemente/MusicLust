var Perform = require('../models/perform');

module.exports = {
  addComment
  
};

function addComment(req, res) {
    if(req.user){
      // From here you can control commenting - if a user is logged in, make the comment
      Perform.findById(req.params.id,function(err, perform) {
      perform.comments.push(req.body);
      perform.save(function(err) {
        res.redirect('/performs');
      });
    });
    } else {
      // otherwise we can send them somewhere else
      res.redirect('Send them somewhere else')
    }
}

//but why tho