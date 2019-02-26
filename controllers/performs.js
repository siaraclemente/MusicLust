var Perform = require('../models/perform');

module.exports = {
    index,
    new: newPerforms,
    create,
    delete: deletePerform

};

function index(req, res) {
    Perform.find({}, function(err, performs) {
        console.log(performs);
      res.render('performs/index', { performs });
    });
 }

 function newPerforms(req, res) {
    res.render('performs/new', { title: 'Add Show' });
  }

function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    var performs = new Perform(req.body);
    performs.save(function(err) {
      // one way to handle errors
      if (err) return res.redirect('/performs/new');
      console.log(performs);
      res.redirect('/performs');
    });
  }

  function deletePerform(req, res, next) {
    Perform.findByIdAndRemove(req.params.id, function(error, deletedPerforms){
        if(error){
            console.log(error)
        } else {
            console.log(deletedPerforms, 'This Show was deleted')
            res.redirect('/performs')
        }
    });
};

  

