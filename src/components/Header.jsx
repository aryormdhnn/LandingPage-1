import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../css/Header.css';
import logo from '../assets/Logo.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="background">
      <Navbar className="header" expand="lg">
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="responsive-navbar-nav" className={expanded ? "show" : ""}>
          <Nav className="menu-nav ml-auto mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#demos">Demos</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
       
        <div className="ml-auto">
          <button className="btn-hero">Book A Meeting</button>
        </div>
         </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
