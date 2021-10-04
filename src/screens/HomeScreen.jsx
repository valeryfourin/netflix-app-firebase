import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ShowsList from '../components/ShowsList';
import requests from '../http/Requests';

import '../styles/HomeScreen.css';

export default function HomeScreen() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchShows);
      setMovies(request.data);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div className="home-screen">
      <NavBar />
      <Banner array={JSON.stringify(movies)} />

      <ShowsList title="RECENT" genre="all" array={JSON.stringify(movies)} />
      <ShowsList
        title="COMEDIES"
        genre="Comedy"
        array={JSON.stringify(movies)}
      />
      <ShowsList
        title="ROMANCE"
        genre="Romance"
        array={JSON.stringify(movies)}
      />
      <ShowsList
        title="THRILLER"
        genre="Thriller"
        array={JSON.stringify(movies)}
      />
      <ShowsList title="HORROR" genre="Horror" array={JSON.stringify(movies)} />

      <Footer />
    </div>
  );
}
