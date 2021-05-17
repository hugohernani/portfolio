import React from 'react';
import { Card } from 'react-bootstrap';
import { IProjectListing } from '../../interfaces';

const ProjectListing: React.FC<IProjectListing> = ({ projects }) => {
  return (
    <React.Fragment>
      {projects.map((project) => (
        <Card border="light" key={project.id}>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Subtitle>{project.technology}</Card.Subtitle>
            <Card.Text>{project.shortDescription}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default ProjectListing;
