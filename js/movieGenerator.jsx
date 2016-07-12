var React = require('react');
var connect = require('react-redux').connect;

var router = require('react-router');
var Link = require('react-router').Link;
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var store = require('../redux/store.js');

//provides movie details for user with option
//to navigate to Netflix with correct movie ID
//provided by the API

//TODO: once user clicks on 'Watch it now', save movie to
//user's account as movie they have watched

var MovieGenerator = React.createClass({
  render: function() {
    return (
      <section className="movie">
        <h3>"What's that like? What's it taste like? Describe it like Hemingway."</h3>
        <img src="" alt="Nic Cage Gif"/>
        <div className="movieDetails">
          <ul>
            <li>Title: </li>
            <li>Year Released: </li>
            <li>Rating: </li>
            <li>Summary: </li>
            <li>Poster: </li>
          </ul>
        </div>
        <form action="http://netflix.com">
          <input type="submit" value="Watch it now!"/>
        </form>
      </section>
    );
  }
});

module.exports = MovieGenerator;
