import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import GenresList from "../genres-list/genres-list.jsx";
import {filmsType, filmType} from "../../types/types";
import {connect} from "react-redux";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons.jsx";
import {getGenre, getGenresList} from "../../reducer/watch/selectors.js";
import Header from "../header/header.jsx";

const MoviesListWrapped = withActiveItem(MoviesList);

const Main = (props) => {

  const {genreFilms, mainFilm, onSmallMovieCardClick, onGenreItemClick, activeGenre, onPlayButtonClick, genresList} = props;
  const {genre, title, releaseDate, poster, pictureBackground} = mainFilm;
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={pictureBackground} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          isMain={true}
        />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={title}width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <MovieCardButtons onPlayButtonClick={onPlayButtonClick} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genresList={genresList }
            activeGenre={activeGenre}
            onGenreItemClick={onGenreItemClick}
          />

          <MoviesListWrapped
            genreFilms={genreFilms}
            onSmallMovieCardClick={onSmallMovieCardClick}
          />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2020 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  genresList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string).isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  genreFilms: filmsType.isRequired,
  mainFilm: PropTypes.oneOfType([
    filmType.isRequired,
    () => null,
  ]),
  onSmallMovieCardClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreItemClick: PropTypes.func.isRequired,

  onPlayButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    activeGenre: getGenre(state),
    genresList: getGenresList(state),
  }
);

export {Main};
export default connect(mapStateToProps)(Main);

