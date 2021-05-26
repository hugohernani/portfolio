import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PortfolioListing from './components/PortfolioListing';
import TableOfContent from './components/TableOfContent';

const Portfolio: React.FC = () => {
  return (
    <Row className="mx-0 bg-light mx-5 my-3 py-3">
      <Col className="px-5" md={9}>
        <PortfolioListing />
      </Col>
      <Col className="px-0" md={3}>
        <TableOfContent />
      </Col>
    </Row>
  );
};

export default Portfolio;
