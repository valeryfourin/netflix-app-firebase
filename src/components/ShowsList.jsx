/* eslint-disable eslint-comments/disable-enable-pair */ /* eslint-disable prettier/prettier */
/* eslint-disable no-console */

import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import requests from '../http/Requests';

import ItemModal from './ItemModal';

import '../styles/ShowsList.css';

const showsCount = 30;

const defaultValues = {
    id: 1,
    name: "Under the Dome",
    url: "https://www.tvmaze.com/shows/1/under-the-dome",
    img: "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
    type: "Scripted",
    genres: ["Drama","Science-Fiction","Thriller"],
    premiered: "2013-06-24",
    rating: 6.5,
    runtime: 60,
    summary: 'Movie description'
}

export default function ShowList({ title, genre }) {
    // eslint-disable-next-line no-unused-vars
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
    }, [genre])


    return (
        <div className="shows-list">
            <h2>{title}</h2>

            <div className="shows-list__posters">
                {movies.map(movie => (
                    <ItemModal 
                        className='shows-list__poster'
                        src={movie.image !== undefined ? movie.image?.original : defaultValues.img}
                        key={movie.id !== undefined ? movie?.id : defaultValues.id}
                        id={movie.id !== undefined ? movie?.id : defaultValues.id}
                        name={movie.name !== undefined ? movie?.name : defaultValues.name}
                        url={movie.url !== undefined ? movie?.url : defaultValues.url}
                        premiered={movie.premiered !== undefined ? movie?.premiered : defaultValues.premiered}
                        runtime={movie.runtime !== undefined ? movie?.runtime : defaultValues.runtime}
                        summary={movie.summary !== undefined ? movie?.summary : defaultValues.summary}
                        type={movie.type !== undefined ? movie?.type : defaultValues.type}
                        genres={movie.genres !== undefined ? movie?.genres.toString() : defaultValues.genres.toString()}
                        rating={movie?.rating !== undefined ? movie?.rating?.average : defaultValues.rating}
                    />
                ))}
            </div>
        </div>
    )
}

ShowList.propTypes = {
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
}

