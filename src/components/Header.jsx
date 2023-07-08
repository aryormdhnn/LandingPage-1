import '../css/Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Navbar className="background">
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
      </div>
    </Navbar>
  );
};

export default Header;
