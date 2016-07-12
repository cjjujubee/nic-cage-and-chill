var React = require('react');
var connect = require('react-redux').connect;

var router = require('react-router');
var Link = require('react-router').Link;
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var store = require('../redux/store.js');

var MovieChecklist = React.createClass({
  render: function() {
    return (
      <section className="movie">
        <h3>USER'S NAME</h3>
        <img src="" alt="User Gravatar"/>
        <div className="movieChecklist">
          <h4>Nic Cage Movies You've Watched</h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="movieTime">
          <h4>Ready for more Nic Cage?</h4>
          <p>Click below for your next Nic Cage movie!</p>
          <MovieButton text="Cage me!"/>
        </div>
      </section>
    );
  }
});

//TODO: Takes you to MovieGenerator with random movie
var MovieButton = React.createClass({
  render: function() {
    return (
      <button type="submit"> {this.props.text} </button>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    NicCage: state
  };
};

var Container = connect(mapStateToProps)(MovieChecklist);

module.exports = Container;
