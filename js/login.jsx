var React = require('react');
var ReactDOM = require('react-dom');

var connect = require('react-redux').connect;
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var Link = require('react-router').Link;

var Provider = require('react-redux').Provider;
var store = require('../redux/store');


var Login = React.createClass({
    render: function() {
        return (
            <section className="loginModal">
                <h1>Login here</h1>
            </section>
        )
    }
});

var mapStateToProps = function(state, props) {
  return {
    nicCage: state
  };
};

var Container = connect(mapStateToProps)(Login);

module.exports = Container;
