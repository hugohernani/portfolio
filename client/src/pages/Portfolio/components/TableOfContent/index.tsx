import React, { useMemo } from 'react';
import { Card } from 'react-bootstrap';
import useProjects from '../../hooks/projects';
import ProjectListing from './ProjectListing';
import { Container } from './styles';

const TableOfContent: React.FC = () => {
  const { isSuccess, projects } = useProjects();

  return useMemo(
    () => (
      <Container>
        <Card>
          <Card.Header>
            <Card.Title>Projects</Card.Title>
          </Card.Header>
          {isSuccess && <ProjectListing projects={projects} />}
        </Card>
      </Container>
    ),
    [isSuccess, projects],
  );
};

export default TableOfContent;
