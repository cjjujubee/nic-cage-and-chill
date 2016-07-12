var express = require('express');
var router = express.Router();

var UserMovie = require('../models/userMovie');

//retrieves all movies associated with specific user

router.get('/useraccount/:userId', function(req, res) {
  UserMovie.find(function(err, userMovies) {
    if (err) {
      errback(err);
      return;
    }
    callback(userMovies);
  });
});

module.exports = router;
