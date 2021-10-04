import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { filterShows } from '../http/Requests';

import ItemModal from './ItemModal';

import '../styles/ShowsList.css';

const showsCount = 30;

export default function ShowsList({ title, genre, array }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      if (genre !== 'all') {
        setMovies(
          filterShows(JSON.parse(array), 'genres', genre).slice(0, showsCount),
        );
      } else {
        setMovies(JSON.parse(array).slice(0, showsCount));
      }
    }

    fetchData();
  }, [title, genre, array]);

  return (
    <div className="shows-list">
      <h2>{title}</h2>

      <div className="shows-list__posters">
        {movies.length > 0 &&
          movies.map((movie) => (
            <ItemModal
              className="shows-list__poster"
              src={movie.image?.original}
              key={movie.id}
              id={movie.id}
              name={movie?.name}
              url={movie?.url}
              premiered={movie?.premiered}
              runtime={movie?.runtime}
              summary={movie?.summary}
              type={movie?.type}
              genres={movie?.genres?.join(', ')}
              rating={movie?.rating?.average}
            />
          ))}
      </div>
    </div>
  );
}

ShowsList.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  array: PropTypes.string.isRequired,
};
