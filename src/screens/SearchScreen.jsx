import React from 'react';

import NavBar from '../components/NavBar';

import '../styles/ProfileScreen.css';

export default function SearchScreen() {
  return (
    <div className="profile-screen">
      <NavBar />
      <div className="profile-screen__body">
        <h1>Search Shows</h1>
      </div>
    </div>
  );
}
