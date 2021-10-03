import axios from 'axios';
import React, { useEffect, useState } from 'react';

import requests from '../http/Requests';

import MovieDetails from './MovieDetails';

import '../styles/Banner.css';

const maxSymbolCount = 300;

function truncate(string, number_) {
  return string?.length > number_
    ? `${string.slice(0, Math.max(0, number_ - 1))}...`
    : string;
}

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [movieBanner, setMovieBanner] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchShows);
      setMovie(
        request.data[Math.floor(Math.random() * request.data.length - 1)],
      );
      return request;
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (movie?.id !== undefined) {
        const requestBanner = await axios.get(
          `${requests.fetchShows}/${
            movie?.id === undefined ? 1 : movie?.id
          }/images`,
        );
        setMovieBanner(
          requestBanner.data.filter((object) => {
            return object.type === 'background';
          }),
        );
        return requestBanner;
      }
      return 0;
    }
    fetchData();
  }, [movie]);

  // eslint-disable-next-line no-console
  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${
          movieBanner.length > 0 ? movieBanner[0].resolutions.original.url : 0
        })`,
      }}
    >
      <div className="banner__content row">
        <div className="col-8 banner__col">
          <div className="banner__text-wrap">
            <h1 className="banner__title">{movie && movie.name}</h1>
            <div className="banner__buttons">
              <a href={movie.url} target="_blank" rel="noreferrer">
                <button type="button" className="banner__button">
                  Play
                </button>
              </a>
              {movie && (
                <MovieDetails
                  src={movie.image?.original}
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
              )}
            </div>
            <h2
              className="banner__description"
              dangerouslySetInnerHTML={{
                __html: truncate(movie && movie.summary, maxSymbolCount),
              }}
            />
          </div>
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}
