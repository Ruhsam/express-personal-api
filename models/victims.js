var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Name = require('./nameSchema');

var victimSchema = new Schema({
  name: {type: Schema.Types.ObjectId, ref: 'Name'},
  case: String,
  last_contact: Date,
  victimOfCrime: String,
  acceptingHelp: Boolean

});

var Victim = mongoose.model('Victim', VictimSchema);

module.exports = Victim;
