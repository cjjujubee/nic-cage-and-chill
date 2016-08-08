var fetch = require('isomorphic-fetch');

var getMovie = function() {
  var options = {
    base_url: 'http://netflixroulette.net/api/api.php',
    actor: '?actor=Nicolas%20Cage'
  };

  var searchResult = options.base_url + options.actor;

  return function(dispatch) {
    return fetch(searchResult).then(function(result) {
      if (result.status < 200 || result.status >= 300) {
        var err = new Error(result.statusText);
        err.response = result;
        throw err;
      }
      return result;
    })
    .then(function(data) {
      return data.json();
    })
    .then(function(data) {
      return dispatch(getMovieSuccess(data));
    })
    .catch(function(err) {
      return dispatch(getMovieError(err));
    });
  };
};

var GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
var getMovieSuccess = function(data) {
  return {
    type: GET_MOVIE_SUCCESS,
    data: data
  };
};

var GET_MOVIE_ERROR = 'GET_MOVIE_ERROR';
var getMovieError = function(err) {
  console.log('MOVIE FAILURE', err)
  return {
    type: GET_MOVIE_ERROR,
    err: err
  };
};

exports.GET_MOVIE_SUCCESS = GET_MOVIE_SUCCESS;
exports.getMovieSuccess = getMovieSuccess;
exports.GET_MOVIE_ERROR = GET_MOVIE_ERROR;
exports.getMovieError = getMovieError;
exports.getMovie = getMovie;
