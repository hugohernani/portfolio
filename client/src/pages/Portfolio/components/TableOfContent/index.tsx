import React, { useMemo } from 'react';
import { Card, NavLink } from 'react-bootstrap';
import { A } from 'hookrouter';
import { IProject } from 'src/interfaces';
import { useProjects } from '../../hooks/projects';
import ProjectListing from './ProjectListing';
import { Container } from './styles';

const TableOfContent: React.FC = () => {
  const { isSuccess, data: projects } = useProjects();

  return useMemo(
    () => (
      <Container>
        <Card>
          <Card.Header className="text-center">
            <NavLink as={A} className="btn btn-secondary btn-block" href={'/projects'}>
              Projects
            </NavLink>
          </Card.Header>
          {isSuccess && <ProjectListing projects={projects as IProject[]} />}
        </Card>
      </Container>
    ),
    [isSuccess, projects],
  );
};

export default TableOfContent;
