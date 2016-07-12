var React = require('react');
var connect = require('react-redux').connect;

var router = require('react-router');
var Link = require('react-router').Link;
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var store = require('../redux/store.js');

var FrontPage = React.createClass({
  render: function() {
    return (
      <section className="intro">
        <p>Not sure what movie to watch? Love Nicolas Cage? Let us figure out your Nic Cage and Chill</p>
        <div className="start-nic-caging">
          <StartButton text="Let's get started!"/>
        </div>
      </section>
    );
  }
});

//TODO: takes user to either login/signup page

var StartButton = React.createClass({
  render: function() {
    return (
      <button type="submit"> {this.props.text} </button>
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
