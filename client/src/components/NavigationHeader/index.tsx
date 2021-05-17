import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationHeader: React.FC = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>
        <NavLink exact to="/" className="btn btn-light uppercase">
          Hugo Hernani
        </NavLink>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink exact to="/portfolio" className="nav-link">
          Portfolio
        </NavLink>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link className="uppercase" href="#home">
          Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationHeader;
