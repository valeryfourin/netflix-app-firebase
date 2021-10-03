import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import requests from '../http/Requests';

import ItemModal from './ItemModal';

import '../styles/ShowsList.css';

const showsCount = 30;

export default function ShowsList({ title, genre }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchShows);
      if (genre !== 'all') {
        setMovies(
          request.data
            .filter((object) => {
              return object?.genres.includes(genre);
            })
            .slice(0, showsCount),
        );
      } else {
        setMovies(request.data.slice(0, showsCount));
      }
      return request;
    }

    fetchData();
  }, [genre]);

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
};
