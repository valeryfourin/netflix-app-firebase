/* eslint-disable eslint-comments/disable-enable-pair */ /* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

import Footer from '../components/Footer';
import ItemModal from '../components/ItemModal';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination';
import requests, { filterShows, genresTypes } from '../http/Requests';

import '../styles/Screen.css';

const showsCount = 10;

export default function SearchScreen() {
  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(showsCount);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchShows);
      setMovies(request.data);
      setFilteredMovies(request.data);
      return request;
    }
    fetchData();
  }, []);

  function fetchDataByGenre(genre) {
    if (genre !== 'All') {
      console.log(filterShows(movies, 'genres', genre));
      setFilteredMovies(filterShows(movies, 'genres', genre));
    } else {
      setFilteredMovies(movies.slice(0, showsCount));
    }
  }

  function fetchDataByKeyword() {
    if (keyword !== '') {
      setFilteredMovies(filterShows(movies, 'name', keyword));
    }
  }

  return (
    <div className="screen">
      <NavBar />
      <div className="screen__body">
        <h1>Search Shows</h1>
        <InputGroup className="mb-3 screen-input">
          {genresTypes.map((genre) => (
            <Button
              key={genre}
              variant="dark"
              value={genre}
              onClick={(event) => {
                setCurrentPage(1);
                fetchDataByGenre(event.target.value);
              }}
            >
              {genre}
            </Button>
          ))}
        </InputGroup>
        <InputGroup className="mb-3 screen-input">
          <Button
            variant="outline-danger"
            id="button-addon1"
            onClick={() => {
              setCurrentPage(1);
              fetchDataByKeyword();
            }}
          >
            Find
          </Button>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder="search for shows"
            onChange={(event) => {
              setKeyword(event.target.value);
            }}
          />
        </InputGroup>
        <div className="screen__results">
          {keyword !== '' && filteredMovies.length === 0 ? (
            <span>Sorry, nothing found!</span>
          ) : (
            ''
          )}
          {currentMovies.length > 0 &&
            currentMovies.map((movie) => (
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
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={filteredMovies.length}
          paginate={paginate}
        />
      </div>

      <Footer />
    </div>
  );
}
