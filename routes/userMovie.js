var express = require('express');
var router = express.Router();

var UserMovie = require('../models/userMovie');

router.get('/useraccount/:userId', function(req, res) {
  UserMovie.find(function(err, userMovies) {
    if (err) {
      errback(err);
      return;
    }
    callback(userMovies);
  });
});
