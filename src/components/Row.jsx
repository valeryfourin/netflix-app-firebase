/* eslint-disable eslint-comments/disable-enable-pair */ /* eslint-disable prettier/prettier */

import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import requests from '../http/Requests';

import '../styles/Row.css';

export default function Row({ title, genre }) {
    // eslint-disable-next-line no-unused-vars
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchShows);
            if (genre !== 'all') {
                setMovies(
                    request.data.filter((object) => {
                        return object?.genres.includes(genre);
                      }),
                );
            } else {
                setMovies(request.data);
            }
            return request;
        }

        fetchData();
    }, [genre])


    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                        className='row__poster'
                        src={movie && movie.image?.original}
                        alt={movie.name}
                        key={movie.id}
                    />
                ))}
            </div>
        </div>
    )
}

Row.propTypes = {
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
}

