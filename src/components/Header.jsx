import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import '../css/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="background">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <Nav className="menu-nav">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#demos">Demos</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <div className="ml-auto">
          <button className="btn-hero">Book A Meeting</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
