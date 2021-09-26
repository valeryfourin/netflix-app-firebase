// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import HomeScreen from './components/HomeScreen';

import './App.css';

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <HomeScreen />
      </div>
    </React.StrictMode>
  );
}

export default App;
