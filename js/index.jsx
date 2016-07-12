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

//components

var FrontPage = require('./frontPage');
var MovieGenerator = require('./movieGenerator');
var MovieChecklist = require('./movieChecklist');

//actions
var movieActions = require('../redux/actions/movie');

var NicCage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <nav>
          <ul className="nav-items">
            <li>Home</li>
            <li>Your Account</li>
            <li>Log out</li>
          </ul>
        </nav>
        <h1>Nic Cage and Chill</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    nicCage: state
  };
};

var Container = connect(mapStateToProps)(NicCage);

var routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={NicCage}>
        <IndexRoute component={FrontPage} />
        <Route path="/yourmovie" component={MovieGenerator} />
        <Route path="/account" component={MovieChecklist} />
      </Route>
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    routes, document.getElementById('app')
  );
});
