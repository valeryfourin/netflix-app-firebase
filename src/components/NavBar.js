import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Image } from 'react-bootstrap'
import "../styles/NavBar.css"

export default function NavBar() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
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
     
    <Navbar expand="lg" sticky="top" id="navbar" className={`nav-menu ${show && 'nav-menu-show'}`}>
      <Container>
      <Image className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Series</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <Image className="user-icon" src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ.jpg"/>
      </Container>
    </Navbar>
    )
}
