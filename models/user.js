var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  movies: [{
    title: String,
    releaseYear: Number,
    posterUrl: String,
    userId: String
  }]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
