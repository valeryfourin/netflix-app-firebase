import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../http/Requests';
import '../styles/Banner.css'

export default function Banner() {
    
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchShows)
            setMovie(
                request.data.result[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        fetchData();
    })

    console.log(movie)
    function truncate(string, num) {
        return string?.length > num ? string.substr(0, num - 1) + '...' : string;
    }
    return (
        <header
            className="banner"
            style={{backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png)"}}
        >
            
            <div className="banner__content">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div> 
                <h1 className="banner__description">
                    
                    {truncate('This is test description This is test description This is test description This is test descriptionThis is test descriptionThis is test descriptionthishfhfdfjkdjfdjfjsdfjsdfjdsfdf', 150)}
                </h1>
            
            </div>  

            <div className="banner--fadeBottom"></div> 
            
        </header>
        
        
    )
}
