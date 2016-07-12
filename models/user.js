var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

var User = mongoose.model('UserMovie', UserSchema);

module.exports = User;
