import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PortfolioListing from './components/PortfolioListing';
import TableOfContent from './components/TableOfContent';

const Portfolio: React.FC = () => {
  return (
    <Row>
      <Col md={9} className="no-horizontal-padding">
        <PortfolioListing />
      </Col>
      <Col md={3} className="no-horizontal-padding">
        <TableOfContent />
      </Col>
    </Row>
  );
};

export default Portfolio;
