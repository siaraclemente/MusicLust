var mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

// The commentSchema is used to embedded docs in a band doc.
// There is no model and no 'facts' collection
var commentSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

var performSchema = new mongoose.Schema({
    location: String,
    date: Date,
    time: String,
    comments: [commentSchema]
  });


module.exports = mongoose.model('Perform', performSchema);