var combineReducers = require('redux').combineReducers;

var user = require('./user').userReducer;
var movie = require('./movie').movieReducer;

var reducers = combineReducers({
  user: user,
	movie: movie
});

exports.reducers = reducers;
