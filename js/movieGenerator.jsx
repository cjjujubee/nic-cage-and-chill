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
    var cageGif = "../assets/" + this.props.nicCage[0].gif;
    console.log('getting nic', cageGif);
    return (
      <section className="movie">
        <h2>"What's that like? What's it taste like? Describe it like Hemingway."</h2>
        <img src="" alt="Nic Cage Gif"/>
        <div className="movieDetails">
          <ul>
            <li>Title: {this.props.nicCage[0].show_title}</li>
            <li>Released: {this.props.nicCage[0].released_year}</li>
            <li>Rating: {this.props.nicCage[0].rating}</li>
            <li>Summary: {this.props.nicCage[0].summary}</li>
            <li><img src={this.props.nicCage[0].poster} alt="movie poster"/> </li>
          </ul>
        </div>
        <form action="http://netflix.com">
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
