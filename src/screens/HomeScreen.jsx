import React from 'react';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ShowsList from '../components/ShowsList';

import '../styles/HomeScreen.css';

export default function HomeScreen() {
  return (
    <div className="home-screen">
      <NavBar />
      <Banner />

      <ShowsList title="RECENT" genre="all" />
      <ShowsList title="COMEDIES" genre="Comedy" />
      <ShowsList title="ROMANCE" genre="Romance" />
      <ShowsList title="THRILLER" genre="Thriller" />
      <ShowsList title="HORROR" genre="Horror" />

      <Footer />
    </div>
  );
}
