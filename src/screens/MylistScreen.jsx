import React from 'react';

import NavBar from '../components/NavBar';

import '../styles/ProfileScreen.css';

export default function MylistScreen() {
  return (
    <div className="profile-screen">
      <NavBar />
      <div className="profile-screen__body">
        <h1>My List</h1>
      </div>
    </div>
  );
}
