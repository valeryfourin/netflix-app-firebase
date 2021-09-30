import React from 'react';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Row from '../components/Row';

import '../styles/HomeScreen.css';

export default function Homescreen() {
  return (
    <div className="home-screen">
      <NavBar />
      <Banner />

      <Row title="RECENT" genre="all" />
      <Row title="COMEDIES" genre="Comedy" />
      <Row title="ROMANCE" genre="Romance" />
      <Row title="THRILLER" genre="Thriller" />
      <Row title="HORROR" genre="Horror" />

      <Footer />
    </div>
  );
}
