var React = require('react');

var MovieGenerator = React.createClass({
  render: function() {
    return (
      <section className="movie">
        <h3>"What's that like? What's it taste like? Describe it like Hemingway."</h3>
        <img src="" alt="Nic Cage Gif"/>
        <div className="movieDetails">
          <ul>
            <li>Title: </li>
            <li>Year Released: </li>
            <li>Rating: </li>
            <li>Summary: </li>
            <li>Poster: </li>
          </ul>
        </div>
      </section>
    );
  }
});

module.exports = MovieGenerator;
