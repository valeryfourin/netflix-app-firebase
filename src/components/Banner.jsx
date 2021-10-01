// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-console */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import requests from '../http/Requests';

import '../styles/Banner.css';

const maxSymbolCount = 200;

function truncate(string, number_) {
  return string?.length > number_
    ? `${string.slice(0, Math.max(0, number_ - 1))}...`
    : string;
}

// function htmlDecode(input) {
//   const element = document.createElement('div');
//   element.innerHTML = input;
//   return element.childNodes.length === 0 ? '' : element.childNodes[0].nodeValue;
// }

export default function Banner() {
  const [movie, setMovie] = useState([]);
  // eslint-disable-next-line no-unused-vars
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

  console.log(movie);
  // console.log(
  //   movieBanner.length > 0 ? movieBanner[0].resolutions.original.url : 0,
  // );
  // console.log(typeof movie === 'undefined' ? 1 : movie?.id);

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
        <div className="col-6 banner__col">
          <div className="banner__text-wrap">
            <h1 className="banner__title">{movie && movie.name}</h1>
            <div className="banner__buttons">
              <a href={movie.url} target="_blank" rel="noreferrer">
                <button type="button" className="banner__button">
                  Play
                </button>
              </a>
              <button type="button" className="banner__button">
                My List
              </button>
            </div>
            <h2
              className="banner__description"
              // dangerouslySetInnerHTML={{
              //   __html: ,
              // }}
            >
              {/* {htmlDecode(movie && movie.summary)} */}
              {/* {new DOMParser().parseFromString(movie && movie.summary, 'text/html')} */}
              {/* {truncate(movie && movie.summary, maxSymbolCount)} */}
              {truncate(movie && movie.summary, maxSymbolCount)}
            </h2>
          </div>
        </div>
        <div className="col-6">
          <div className="banner__preview" />
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}
