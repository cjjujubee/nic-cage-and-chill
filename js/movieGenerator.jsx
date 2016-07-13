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

//TODO: NEED TO FIGURE OUT HOW TO RETRIEVE USER ID TO SEND
//TO BACKEND IN ORDER TO SAVE MOVIE VIA SAVEMOVIE ACTION
//(USER.JS IN REDUX/ACTIONS FOLDER)

//TODO: allow user to go back with back button

var MovieGenerator = React.createClass({
  saveMovie: function(event) {
    event.preventDefault();

    var movie = {
      title: this.props.nicCage[0].show_title,
      releaseYear: this.props.nicCage[0].release_year,
      posterUrl: this.props.nicCage[0].poster
    };

    this.props.dispatch(userActions.saveMovie(movie));
  },
  render: function() {
    var cageGif = "../assets/images/" + this.props.nicCage[0].gif;

    // console.log('show ID', showId);
    return (
      <section className="movie">
        <h2>"What's that like? What's it taste like? Describe it like Hemingway."</h2>
        <img src={cageGif} alt="Nic Cage Gif"/>
        <div className="movieDetails">
          <ul>
            <li>Title: {this.props.nicCage[0].show_title}</li>
            <li>Released: {this.props.nicCage[0].release_year}</li>
            <li>Rating: {this.props.nicCage[0].rating}</li>
            <li>Summary: {this.props.nicCage[0].summary}</li>
            <li><img src={this.props.nicCage[0].poster} alt="movie poster"/> </li>
          </ul>
        </div>
        <form onSubmit={this.saveMovie} action="http://netflix.com/WiPlayer?movieid={showId}">
          <input type="submit" value="Watch it now!"/>
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
