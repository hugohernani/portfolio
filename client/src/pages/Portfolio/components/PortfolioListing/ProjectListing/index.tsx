import React, { useMemo } from 'react';
import { Card } from 'react-bootstrap';
import { IProjectListing } from 'src/interfaces';

const ProjectListing: React.FC<IProjectListing> = ({ projects }) => {
  return useMemo(
    () => (
      <React.Fragment>
        {projects.map((project) => (
          <Card className="px-5 py-4 border-0" key={project.id}>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Subtitle>{project.technology}</Card.Subtitle>
              <Card.Text>
                <span>{project.shortDescription}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </React.Fragment>
    ),
    [projects],
  );
};

export default ProjectListing;
