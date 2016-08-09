var React = require('react');
var ReactDOM = require('react-dom');

var connect = require('react-redux').connect;
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var Link = require('react-router').Link;

var store = require('../redux/store');

var userActions = require('../redux/actions/user')

var SignUp = React.createClass({
  saveUser: function(event) {
    event.preventDefault();

    var user = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value
    };
    console.log('the user', user);
    this.props.dispatch(userActions.saveUser(user));
    setTimeout(function() {
      hashHistory.push("/account");
    }, 3000);
  },
  render: function() {
    return (
      <form className="signup-form" onSubmit={this.saveUser}>
        <h1>Sign Up</h1>
        First name:<br></br>
        <input type="text" ref="firstName"></input>
        <br></br>
        Last name:<br></br>
        <input type="text" ref="lastName"></input>
        <br></br>
        Email:<br></br>
        <input type="text" ref="email"></input>
        <br></br>
        <SignUpButton text="Sign up now!"></SignUpButton>
      </form>
    )
  }
})

var SignUpButton = React.createClass({
  render: function() {
    return (
      <button type="submit">{this.props.text}</button>
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
