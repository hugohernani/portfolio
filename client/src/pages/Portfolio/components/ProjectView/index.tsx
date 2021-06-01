import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useProject } from '../../hooks/projects';
import ProjectsSidebar from '../ProjectsSidebar';
import ProjectTableOfContent from '../ProjectsSidebar/ProjectTableOfContent';
import ProjectImage from './ProjectImage';
import { Container, Article } from './styles';

interface IProjectView {
  projectId: string;
}

const ProjectView: React.FC<IProjectView> = ({ projectId }) => {
  const { data: project, isSuccess } = useProject({
    projectId: projectId,
  });

  return (
    <Container>
      {isSuccess && project && (
        <Row>
          <Col className="px-0" md={12}>
            <ProjectImage project={project} />
          </Col>
          <Col className="py-4 pl-5 pr-3" md={9}>
            <Article>
              <Card className="py-5 px-4">
                <Card.Body>
                  <Card.Text>{project.content}</Card.Text>
                </Card.Body>
              </Card>
            </Article>
          </Col>
          <Col className="px-0 py-4 pr-5 pl-3" md={3}>
            <ProjectsSidebar listingTitle="Projects" listingUrl={`/projects/${projectId}`}>
              <ProjectTableOfContent />
            </ProjectsSidebar>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProjectView;
