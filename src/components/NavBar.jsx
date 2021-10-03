import React, { useEffect, useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

import {
  HOME_ROUTE,
  MYLIST_ROUTE,
  PROFILE_ROUTE,
  SEARCH_ROUTE,
} from '../utils/consts';

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
      id="navbar"
      // className="nav-menu nav-menu-show"
      className={`nav-menu ${show && 'nav-menu-show'}`}
    >
      <Container>
        <Image
          onClick={() => history.push(HOME_ROUTE)}
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt="Netflix"
        />
        <Nav className="me-auto">
          <NavLink to={HOME_ROUTE}>Home</NavLink>
          <NavLink to={SEARCH_ROUTE}>Search</NavLink>
          <NavLink to={MYLIST_ROUTE}>My List</NavLink>
        </Nav>
        {/* </Navbar.Collapse> */}
        <Image
          onClick={() => history.push(PROFILE_ROUTE)}
          className="user-icon"
          src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ.jpg"
          alt="user icon"
        />
      </Container>
    </Navbar>
  );
}
