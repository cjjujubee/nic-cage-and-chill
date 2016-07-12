var actions = require('../actions/movie');
var update = require('react-addons-update');

var initialState = [{
  show_title: null,
  release_year: null,
  rating: null,
  summary: null,
  poster: null
}];

exports.movieReducer = function(state, action) {
  console.log('state: ', state);
  state = state || initialState;
  if (action.type === actions.GET_MOVIE_SUCCESS) {
    var movie = action.data
    console.log('movie', movie);
    //TODO: figure out how to randomize the movies!!!!!
  }
};
