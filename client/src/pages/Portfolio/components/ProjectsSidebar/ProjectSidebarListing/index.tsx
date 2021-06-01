import { A } from 'hookrouter';
import { useAtom } from 'jotai';
import React, { useMemo } from 'react';
import { ListGroup } from 'react-bootstrap';
import { selectedProjectResource } from 'src/pages/Portfolio/atoms';
import { useProjects } from 'src/pages/Portfolio/hooks/projects';

const ProjectSidebarListing: React.FC = () => {
  const { isSuccess, data: projects } = useProjects();
  const [activeProjectResourceId, setActiveProjectResourceId] = useAtom(selectedProjectResource);

  return useMemo(
    () => (
      <ListGroup variant="flush" defaultActiveKey={`/projects/${activeProjectResourceId}`}>
        {isSuccess &&
          projects?.map((project) => (
            <ListGroup.Item
              action
              as={A}
              href={`/projects/${project.id}`}
              eventKey={project.id}
              key={project.id}
              onClick={() => setActiveProjectResourceId(project.id)}
            >
              {project.title}
            </ListGroup.Item>
          ))}
      </ListGroup>
    ),
    [isSuccess, projects, setActiveProjectResourceId, activeProjectResourceId],
  );
};

export default ProjectSidebarListing;
