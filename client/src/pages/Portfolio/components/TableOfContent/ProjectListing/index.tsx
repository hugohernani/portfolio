import { useAtom } from 'jotai';
import React, { useMemo } from 'react';
import { ListGroup } from 'react-bootstrap';
import { A } from 'hookrouter';
import { IProjectListing } from 'src/interfaces';
import { selectedProjectIdAtom } from 'src/pages/Portfolio/atoms';

const ProjectListing: React.FC<IProjectListing> = ({ projects }) => {
  const [activeProjectId, setActiveProjectId] = useAtom(selectedProjectIdAtom);

  return useMemo(
    () => (
      <ListGroup variant="flush" defaultActiveKey={`/projects/${activeProjectId}`}>
        {projects.map((project) => (
          <ListGroup.Item
            action
            as={A}
            href={`/projects/${project.id}`}
            eventKey={project.id}
            key={project.id}
            onClick={() => setActiveProjectId(project.id)}
          >
            {project.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    ),
    [projects, setActiveProjectId, activeProjectId],
  );
};

export default ProjectListing;
