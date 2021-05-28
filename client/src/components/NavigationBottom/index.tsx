import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBottom: React.FC = () => {
  return (
    <Navbar className="justify-content-center static-bottom" expand="lg" variant="light" bg="light">
      <Nav>
        <Nav.Item className="uppercase btn btn-light">2021 - Hugo Hernani</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavigationBottom;
