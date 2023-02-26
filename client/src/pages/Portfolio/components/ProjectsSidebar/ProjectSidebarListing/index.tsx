import { A, usePath } from 'hookrouter';
import { useAtom } from 'jotai';
import React, { useMemo } from 'react';
import { ListGroup } from 'react-bootstrap';
import { selectedProjectResource } from 'src/pages/Portfolio/atoms';
import { useProjects } from 'src/pages/Portfolio/hooks/projects';

const ProjectSidebarListing: React.FC = () => {
  const { isSuccess, data: projects } = useProjects();
  const currentPath = usePath();
  const [activeProjectResourceId, setActiveProjectResourceId] = useAtom(selectedProjectResource);

  return useMemo(
    () => (
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      <ListGroup variant="flush" defaultActiveKey={`/projects/${activeProjectResourceId}`}>
        {isSuccess &&
          projects?.map((project) => (
            <ListGroup.Item
              action
              as={A}
              href={`${currentPath}/${project.id}`}
              eventKey={project.id}
              key={project.id}
              onClick={() => setActiveProjectResourceId(project.id)}
            >
              {project.title}
            </ListGroup.Item>
          ))}
      </ListGroup>
    ),
    [isSuccess, projects, currentPath, setActiveProjectResourceId, activeProjectResourceId],
  );
};

export default ProjectSidebarListing;
