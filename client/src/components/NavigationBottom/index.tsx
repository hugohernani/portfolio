import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBottom: React.FC = () => {
  return (
    <Navbar className="d-block" fixed="bottom" expand="lg" variant="light" bg="light">
      <Nav className="justify-content-center">
        <Nav.Item className="uppercase">2021 - Hugo Hernani</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavigationBottom;
