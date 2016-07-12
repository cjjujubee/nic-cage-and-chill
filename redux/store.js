var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var movie = require('./reducers/movie');
var user = require('./reducers/user');

var store = createStore(movie.movieReducer, applyMiddleware(thunk));
module.exports  = store;

//FIX COMBINE REDUCERS
