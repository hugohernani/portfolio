import React from 'react';
import PortfolioListing from './components/PortfolioListing';
import TableOfContent from './components/TableOfContent';

const Portfolio: React.FC = () => {
  return (
    <React.Fragment>
      <PortfolioListing />
      <TableOfContent />
    </React.Fragment>
  );
};

export default Portfolio;
