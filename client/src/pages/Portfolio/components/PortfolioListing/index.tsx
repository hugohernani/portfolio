import React from 'react';
import useProjects from '../../hooks/projects';
import ProjectListing from './ProjectListing';
import { Container } from './styles';

const PortfolioListing: React.FC = () => {
  const { projects, isSuccess } = useProjects();

  return <Container>{isSuccess && <ProjectListing projects={projects} />}</Container>;
};

export default PortfolioListing;
