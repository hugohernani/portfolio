import { useRoutes } from 'hookrouter';
import PortfolioRoutes from './routes';
import React, { Suspense } from 'react';
import { Col } from 'react-bootstrap';
import { Container } from './styles';

const Portfolio: React.FC = () => {
  const routesResults = useRoutes(PortfolioRoutes);

  return (
    <Container className="row bg-light">
      <Col md={12}>
        <Suspense fallback={<div>Loading...</div>}>{routesResults}</Suspense>
      </Col>
    </Container>
  );
};

export default Portfolio;
