var actions = require('../actions/user');
var update = require('react-addons-update');

var initialState = {
  confirmed: false,
  show_title: null,
  release_year: null,
  poster: null,
};

exports.userReducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.MOVIE_SAVED) {
    var newState = update(state, {
      $set: {
        confirmed: true
      }
    });
    state = newState;
  }
  else if (action.type === actions.MOVIE_NOT_SAVED) {
    console.log('==========MOVIE_NOT_SAVED==========');
    var newState = update(state, {
      $set: {
        confirmed: false
      }
    });
    state = newState;
  }
  else if (action.type === actions.STORE_MOVIE) {
    console.log('STORING MOVIE');
    var newState = update(state, {
      $set: {
        show_title: action.movie.show_title,
        release_year: action.movie.release_year,
        poster: action.movie.poster
      }
    });
    state = newState;
  }
  return state;
};
