var React = require('react');
var ReactDOM = require('react-dom');

var FrontPage = require('./frontPage');
var MovieGenerator = require('./movieGenerator');

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
          <FrontPage />
        </div>
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <MovieGenerator />, document.getElementById('app')
  );
});
