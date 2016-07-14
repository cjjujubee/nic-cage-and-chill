var express = require('express');
var router = express.Router();

var User = require('../models/user');

//retrieves all users

router.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

//creates a new user

router.post('/users', function(req, res) {
  User.create({
    name: req.body.name,
    email: req.body.email,
    movies: []
  }, function(err, user) {
    if (err) {
      console.log('the error is:', err);
      res.status(400);
    }
    else {
      res.status(201).json(user);
    }
  });
});

//finds specific user and associated list of movies
router.get('/users/:userId', function(req, res) {
  User.findOne({_id: req.params.userId}, function(err, user) {
    if (err) {
      res.status(500);
    }
    else if (!user) {
      res.status(404);
    }
    else {
      res.status(200).json(user);
    }
  });
});

//finds user and adds movie if it doesn't already
//exist in the database for that specific user
router.put('/users/:userId', function(req, res) {
  User.findOne({_id: req.params.userId}, function(err, user) {
    if (err) {
      res.status(500);
    }
    else if (!user) {
      res.status(404);
    }
    else {
      var movieExists = false;
      for (var i=0; i<user.movies.length; i++) {
        if (user.movies[i].title === req.body.title) {
         movieExists = true;
         res.status(200).json(user);
        }
      }
      if (!movieExists) {
        user.movies.push(req.body);

        var query = {
          _id: user._id
        };
        var update = {
          $set:{movies: user.movies}
        };
        User.findOneAndUpdate(query, update, {new: true}, function(err, user) {
          if (err) {
            res.status(500);
          }
          else {
            res.status(200).json(user);
          }
        });
      }
    }
  });
});

module.exports = router;
