var store = require('./store');
var MovieActions = require('./actions/movie');

store.dispatch(MovieActions.getMovie());

var store = store.getState();
console.log(store);
