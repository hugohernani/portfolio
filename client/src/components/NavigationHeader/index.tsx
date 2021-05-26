import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';

const NavigationHeader: React.FC = () => {
  return (
    <Container>
      <Navbar expand="lg" bg="light" variant="light">
        <Navbar.Brand>
          <NavLink exact to="/" className="btn btn-light uppercase">
            Hugo Hernani
          </NavLink>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink exact to="/portfolio" className="nav-link px-3 btn btn-light border-info">
            Portfolio
          </NavLink>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link className="uppercase btn btn-light px-3 text-dark border-info" href="#home">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavigationHeader;
