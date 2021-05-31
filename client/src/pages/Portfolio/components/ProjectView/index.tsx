import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useProject } from '../../hooks/projects';
import TableOfContent from '../TableOfContent';
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
          <Col className="py-4" md={9}>
            <Article>
              <Card>
                <Card.Body>
                  <Card.Text>{project.content}</Card.Text>
                </Card.Body>
              </Card>
            </Article>
          </Col>
          <Col className="px-0 py-4 pr-3" md={3}>
            <TableOfContent />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProjectView;
