var actions = require('../actions/movie');
var update = require('react-addons-update');

var initialState = [{
  gif: null,
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
    var movie = action.data;

    //finds length of Nicolas Cage movies array to randomly generate
    //number for random movie
    var numberOfMovies = movie.length;

    var randomNumber = Math.floor((Math.random() * numberOfMovies) + 1);
    var randomMovie = movie[randomNumber];

    //random gif generator
    var gifArray = ['cage_001', 'cage_002', 'cage_003', 'cage_004', 'cage_005', 'cage_006', 'cage_007', 'cage_008', 'cage_009', 'cage_010'];
    var randomGifNumber = Math.floor((Math.random() * gifArray.length) + 1);
    var randomGif = gifArray[randomGifNumber] + '.gif';
    console.log('AN IMAGE IMAGE IMAGE IMAGE IMAGE', randomGif);

    var newState = update(state, {0: {
      $set: {
        gif: randomGif,
        show_id: randomMovie.show_id,
        title: randomMovie.show_title,
        release: randomMovie.release_year,
        rating: randomMovie.rating,
        summary: randomMovie.summary,
        poster: randomMovie.poster
      }
    }});
    console.log('new state:', newState);
    state = newState;
  }
  else if (action.type === actions.GET_MOVIE_ERROR) {
    console.log(action.err.response.status); //logs out error
  }
  return state;
};
