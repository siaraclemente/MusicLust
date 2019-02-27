var Perform = require('../models/perform');

module.exports = {
  addComment,
  editComment
  
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

function editComment(req, res) {
    console.log(req.params.id, "This is the Id of the comment we're updating")
    console.log(req.body, "This is updated information of the comment")
    Fruits.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(error, updatedComment){
        console.log(updatedComment, "This is the updated comment")
        res.redirect('/performs')
    });
}
