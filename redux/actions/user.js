var fetch = require('isomorphic-fetch');

var SAVE_MOVIE = 'SAVE_MOVIE';

var saveMovie = function(movie, userId) {
  return function(dispatch) {
    return fetch('http://localhost:8080/users/' + userId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    .then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var err = new Error(response.statusText);
        err.response = response;
        throw err;
      }
      return response;
    })
    .then(function(data) {
      return dispatch(movieSaved());
    })
    .catch(function(err) {
      return dispatch(movieNotSaved());
    });
  };
};

var MOVIE_SAVED = 'MOVIE_SAVED';
var movieSaved = function() {
  return {
    type: MOVIE_SAVED
  }
}

var MOVIE_NOT_SAVED = 'MOVIE_NOT_SAVED';
var movieNotSaved = function() {
  return {
    type: MOVIE_NOT_SAVED
  }
}

var STORE_MOVIE = 'STORE_MOVIE';
var storeMovie = function(movie) {
  return {
    type: STORE_MOVIE,
    movie: movie
  }
}

exports.SAVE_MOVIE = SAVE_MOVIE;
exports.saveMovie = saveMovie;
exports.MOVIE_SAVED = MOVIE_SAVED;
exports.movieSaved = movieSaved;
exports.MOVIE_NOT_SAVED = MOVIE_NOT_SAVED;
exports.movieNotSaved = movieNotSaved;
exports.STORE_MOVIE = STORE_MOVIE;
exports.storeMovie = storeMovie;
