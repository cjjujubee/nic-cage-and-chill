var React = require('react');

//provides movie details for user with option
//to navigate to Netflix with correct movie ID
//provided by the API

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
        <form action="http://netflix.com">
          <input type="submit" value="Watch it now!"/>
        </form>
      </section>
    );
  }
});

module.exports = MovieGenerator;
