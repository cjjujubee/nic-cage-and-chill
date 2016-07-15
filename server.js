require('./db/connect');
var express = require('express');
var bodyParser = require('body-parser');
// var userMovieRoutes = require('./routes/userMovie');
var userRoutes = require('./routes/user');
var app = express();
var passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// app.use(express.static('public'));
app.use(express.static('build'));

app.use('/', userRoutes);

app.listen(8081, function() {
    console.log('Running on port 8081');
});

exports.app = app;
