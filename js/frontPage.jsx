var React = require('react');

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

//takes user to either login or signup page

var StartButton = React.createClass({
  render: function() {
    return (
      <button type="submit"> {this.props.text} </button>
    );
  }
});

module.exports = FrontPage;
