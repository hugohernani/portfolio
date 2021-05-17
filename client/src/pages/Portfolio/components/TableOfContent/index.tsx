import React, { useMemo } from 'react';
import { Card } from 'react-bootstrap';
import useProjects from '../../hooks/projects';
import ProjectListing from './ProjectListing';
import { Container } from './styles';

const TableOfContent: React.FC = () => {
  const projects = useProjects();

  return useMemo(
    () => (
      <Container>
        <Card>
          <Card.Header>
            <Card.Title>Projects</Card.Title>
          </Card.Header>
          <ProjectListing projects={projects} />
        </Card>
      </Container>
    ),
    [projects],
  );
};

export default TableOfContent;
