import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBottom: React.FC = () => {
  return (
    <Navbar className="justify-content-center" expand="lg" variant="light" bg="light" static="bottom">
      <Nav>
        <Nav.Item className="uppercase btn btn-light">2021 - Hugo Hernani</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavigationBottom;
