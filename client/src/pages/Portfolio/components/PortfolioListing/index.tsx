import React from 'react';
import useProjects from '../../hooks/projects';
import ProjectListing from './ProjectListing';
import { Container } from './styles';

const PortfolioListing: React.FC = () => {
  const projects = useProjects();

  return (
    <Container>
      <ProjectListing projects={projects} />;
    </Container>
  );
};

export default PortfolioListing;
