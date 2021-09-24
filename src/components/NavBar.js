import React from 'react'
import { Container, Nav, Navbar, Image } from 'react-bootstrap'
import "../styles/NavBar.css"

export default function NavBar() {
    return (
     
    <Navbar expand="lg" className="navbar">
      <Container>
      <Image className="logo" src="https://analyticsindiamag.com/wp-content/uploads/2020/03/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png"/>
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
