require('./connect');

var User = require('../models/user');
var mongoose = require('mongoose');

User.collection.drop();

User.create({
  name: 'Bob Doe',
  email: 'bobdoe@abc.com',
}, function(err) {
  if (err) {
    console.log('THE ERROR:', err);
    return;
  }
  mongoose.disconnect();
});
