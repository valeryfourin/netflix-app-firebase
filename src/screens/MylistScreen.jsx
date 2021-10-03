import React from 'react';

import NavBar from '../components/NavBar';

import '../styles/Screen.css';

export default function MylistScreen() {
  return (
    <div className="screen">
      <NavBar />
      <div className="screen__body">
        <h1>My List</h1>
      </div>
    </div>
  );
}
