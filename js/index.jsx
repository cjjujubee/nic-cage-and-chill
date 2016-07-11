var React = require('react');
var ReactDOM = require('react-dom');

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
        <p>Your number one source of available Nicolas Cage movies!</p>
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <NicCage />, document.getElementById('app')
  );
});
