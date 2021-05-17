import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { IProjectListing } from 'src/interfaces';

const ProjectListing: React.FC<IProjectListing> = ({ projects }) => {
  return (
    <ListGroup variant="flush" defaultActiveKey="">
      {projects.map((project) => (
        <ListGroup.Item key={project.id}>{project.title}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ProjectListing;
