var actions = require('../actions/user');
var update = require('react-addons-update');

var initialState = {
  confirmed: false,
  show_title: null,
  release_year: null,
  poster: null,
  watch_history: [],
  user: null
};

//saving/retreiving movies
exports.userReducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.MOVIE_SAVED) {
      console.log('==========MOVIE_SAVED==========');
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
  else if (action.type === actions.GET_MOVIES_SUCCESS) {
    console.log('setting user', action.movies);
    var newState = update(state, {
      $set: {
        user: action.movies
      }
    });
    state = newState;
  }
  return state;
};

//saving/storing users
exports.saveUserReducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.USER_SAVED) {
    var newState = update(state, {
      $set: {
        confirmed: true
      }
    });
    state = newState;
  }
  else if (action.type === actions.USER_NOT_SAVED) {
    console.log('=====USER_NOT_SAVED=====');
    var newState = update(state, {
      $set: {
        confirmed: false
      }
    });
    state = newState;
  }
  else if (action.type === actions.STORE_USER) {
    console.log('I am storing the user');
    var newState = update(state, {
      $set: {
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email
      }
    });
    state = newState;
  }
  return state;
};
