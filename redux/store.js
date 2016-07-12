var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var movie = require('./reducers/movie');

var store = createStore(movie.movieReducer, applyMiddleware(thunk));
module.exports  = store;
