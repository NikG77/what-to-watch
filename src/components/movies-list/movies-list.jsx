import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = null;

    this.handleSmallMovieCardHover = this.handleSmallMovieCardHover.bind(this);
  }

  handleSmallMovieCardHover(film) {
    this.setState = film;
  }

  render() {
    const {films, onSmallMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) =>
          <SmallMovieCard
            key={film + i}
            film={film}
            onSmallMovieCardClick={onSmallMovieCardClick}
            onSmallMovieCardHover={this.handleSmallMovieCardHover}
          />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
};

export default MoviesList;
