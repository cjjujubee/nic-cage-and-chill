var fetch = require('isomorphic-fetch');

var SAVE_MOVIE = 'SAVE_MOVIE';
var saveMovie = function(movie, userId) {
  console.log('i am saving your movie right now');
  return function(dispatch) {
    return fetch('http://localhost:8081/users/' + '5785cc5cbb55b5a537558492', {
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
  };
};

var MOVIE_NOT_SAVED = 'MOVIE_NOT_SAVED';
var movieNotSaved = function() {
  return {
    type: MOVIE_NOT_SAVED
  };
};

var STORE_MOVIE = 'STORE_MOVIE';
var storeMovie = function(movie) {
  return {
    type: STORE_MOVIE,
    movie: movie
  };
};

var GET_MOVIES = 'GET_MOVIES';
var getMovies = function(userId) {
  console.log('getting your movies right now');
  return function(dispatch) {
    return fetch('http://localhost:8081/users/' + '5785cc5cbb55b5a537558492', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var err = new Error(response.statusText);
        err.response = response;
        throw err;
      }
      return response.json();
    })
    .then(function(movies) {
      return dispatch(getMoviesSuccess(movies));
    })
    .catch(function(err) {
      return dispatch(getMoviesFailure(err));
    });
  };
};

var GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
var getMoviesSuccess = function(movies) {
  console.log('i am a successful movie getter');
  return {
    type: GET_MOVIES_SUCCESS,
    movies: movies
  };
};

var GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';
var getMoviesFailure = function() {
  console.log('i am a shitty movie getter');
  return {
    type: GET_MOVIES_FAILURE
  };
};


exports.SAVE_MOVIE = SAVE_MOVIE;
exports.saveMovie = saveMovie;
exports.MOVIE_SAVED = MOVIE_SAVED;
exports.movieSaved = movieSaved;
exports.MOVIE_NOT_SAVED = MOVIE_NOT_SAVED;
exports.movieNotSaved = movieNotSaved;
exports.STORE_MOVIE = STORE_MOVIE;
exports.storeMovie = storeMovie;

exports.getMovies = getMovies;
exports.GET_MOVIES = GET_MOVIES;
exports.getMoviesFailure = getMoviesFailure;
exports.getMoviesSuccess = getMoviesSuccess;
exports.GET_MOVIES_SUCCESS = GET_MOVIES_SUCCESS;
exports.GET_MOVIES_FAILURE = GET_MOVIES_FAILURE;
