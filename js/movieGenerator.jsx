var React = require('react');
var connect = require('react-redux').connect;

var router = require('react-router');
var Link = require('react-router').Link;
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var store = require('../redux/store.js');

var userActions = require('../redux/actions/user');

//provides movie details for user with option
//to navigate to Netflix with correct movie ID
//provided by the API
//
//

//TODO: NEED TO FIGURE OUT HOW TO RETRIEVE USER ID TO SEND
//TO BACKEND IN ORDER TO SAVE MOVIE VIA SAVEMOVIE ACTION
//(USER.JS IN REDUX/ACTIONS FOLDER)

//TODO: allow user to go back with back button

var MovieGenerator = React.createClass({
  saveMovie: function(event) {
    event.preventDefault();

    var movie = {
      title: this.props.nicCage.movie[0].show_title,
      releaseYear: this.props.nicCage.movie[0].release_year,
      posterUrl: this.props.nicCage.movie[0].poster
    };

    this.props.dispatch(userActions.saveMovie(movie));
  },
  render: function() {
    var movie = this.props.nicCage.movie[0];
    var cageGif = "../assets/images/"+movie.gif;
    var movieUrl = 'http://netflix.com/WiPlayer?movieid=' + movie.show_id;

    return (
      <section className="movie">
        <h2>"What's that like? What's it taste like? Describe it like Hemingway."</h2>
        <img src={cageGif} alt="Nic Cage Gif"/>
        <div className="movieDetails">
          <ul>
            <li>Title: {movie.show_title}</li>
            <li>Released: {movie.release_year}</li>
            <li>Rating: {movie.rating}</li>
            <li>Summary: {movie.summary}</li>
            <li><img src={movie.poster} alt="movie poster"/> </li>
          </ul>
        </div>
        <form onSubmit={this.saveMovie}>
            <button type="submit">
                Watch it now!
            </button>
        </form>
      </section>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    nicCage: state
  };
};

var Container = connect(mapStateToProps)(MovieGenerator);

module.exports = Container;
