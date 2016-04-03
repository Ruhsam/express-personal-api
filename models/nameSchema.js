var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var nameSchema = new Schema({
  first: String,
  middle: String,
  last: String
});

var Name = mongoose.model('Name', NameSchema);

module.exports = Name;
