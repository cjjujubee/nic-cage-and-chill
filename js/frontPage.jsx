var React = require('react');
var connect = require('react-redux').connect;

var router = require('react-router');
var Link = require('react-router').Link;
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var userActions = require('../redux/actions/user');

var store = require('../redux/store.js');

var FrontPage = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(userActions.getMovies());
  },
  render: function() {
    return (
      <section className="intro">
        <p>Not sure what movie to watch? Love Nicolas Cage? Let us figure out your Nic Cage and Chill</p>
        <div className="start-nic-caging">
          <StartButton text="Let's get started!">
          </StartButton>
        </div>
      </section>
    );
  }
});

//TODO: takes user to either login/signup page
//need to create login/signup component that redirects
//to movieChecklist component

var StartButton = React.createClass({
  render: function() {
    return (
      <button type="submit"><Link to={'/account'}>{this.props.text} </Link></button>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    nicCage: state
  };
};

var Container = connect(mapStateToProps)(FrontPage);

module.exports = Container;
