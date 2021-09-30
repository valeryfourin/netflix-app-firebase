import React, { useEffect, useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';

import '../styles/NavBar.css';

const fadeHeight = 100;

export default function NavBar() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const transitionNavBar = () => {
    if (window.scrollY > fadeHeight) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  });

  return (
    <Navbar
      expand="lg"
      fixed="top"
      id="navbar"
      // className="nav-menu nav-menu-show"
      className={`nav-menu ${show && 'nav-menu-show'}`}
    >
      <Container>
        <Image
          onClick={() => history.push('/')}
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt="Netflix"
        />
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Search</Nav.Link>
          <Nav.Link href="#link">My List</Nav.Link>
        </Nav>
        {/* </Navbar.Collapse> */}
        <Image
          onClick={() => history.push('/profile')}
          className="user-icon"
          src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ.jpg"
          alt="user icon"
        />
      </Container>
    </Navbar>
  );
}
