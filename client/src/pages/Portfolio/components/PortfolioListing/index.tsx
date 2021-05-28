import React from 'react';
import { IProject } from 'src/interfaces';
import { useProjects } from '../../hooks/projects';
import ProjectListing from './ProjectListing';
import { Container } from './styles';

const PortfolioListing: React.FC = () => {
  const { data: projects, isSuccess } = useProjects();

  return <Container>{isSuccess && <ProjectListing projects={projects as IProject[]} />}</Container>;
};

export default PortfolioListing;
