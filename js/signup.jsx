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

var SignUp = React.createClass({
  render: function() {
    return (
      <section className="signup">
        <h1>Sign Up</h1>
        <form className="signup-form" name="firstName">
          First name:<br></br>
          <input type="text"></input>
          <br></br>
          Last name:<br></br>
          <input type="text"></input>
          <br></br>
          Email:<br></br>
          <input type="text"></input>
        </form>
        <SignUpButton text="Sign up now!"></SignUpButton>
      </section>
    )
  }
})

var SignUpButton = React.createClass({
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

var Container = connect(mapStateToProps)(SignUp);

module.exports = Container;
