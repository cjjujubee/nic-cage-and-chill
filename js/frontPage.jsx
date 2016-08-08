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
        <h1 className="mainTitle">Nic Cage and Chill</h1>
        <p className="appDescription">Not sure what movie to watch? Love Nicolas Cage?</p>
        <p>Let us find your Nic Cage and Chill</p>
        <div className="start-nic-caging">
          <StartButton text="Let's get started!"></StartButton>
        </div>
      </section>
    );
  }
});

var StartButton = React.createClass({
  render: function() {
    return (
      <button type="submit"><Link to={'/signup'}>{this.props.text} </Link></button>
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
