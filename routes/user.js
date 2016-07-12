var express = require('express');
var router = express.Router();

var User = require('../models/user');

//retrieves all users

router.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

module.exports = router;
