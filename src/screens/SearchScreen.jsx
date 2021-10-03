import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

import NavBar from '../components/NavBar';

import '../styles/Screen.css';

export default function SearchScreen() {
  return (
    <div className="screen">
      <NavBar />
      <div className="screen__body">
        <h1>Search Shows</h1>
        <InputGroup className="mb-3 screen-input">
          <Button variant="outline-danger" id="button-addon1">
            Find
          </Button>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder="search for shows"
          />
        </InputGroup>
        <div className="screen__results">hello</div>
      </div>
    </div>
  );
}
