import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { IProject } from 'src/interfaces';
import { ArticleDescription, Container, Info, Technologies, Title } from './styles';

interface IProjectView {
  project: IProject;
}

const ProjectView: React.FC<IProjectView> = ({ project }) => {
  return (
    <Container>
      <Card className="border-0 bg-dark text-white">
        <Card.Img
          width="480"
          height="600"
          variant="top"
          src="https://via.placeholder.com/600x480/AAAAAA/0000FF?text=Project%20image"
        />
        <Card.ImgOverlay>
          <ArticleDescription>
            <Technologies>
              <Badge pill variant="primary">
                {project.technology}
              </Badge>
            </Technologies>
            <Title>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum{' '}
            </Title>
            <Info>
              <Card.Text>Hugo Hernani</Card.Text>
              <Card.Text>Reading Time: 10min</Card.Text>
              <Card.Text className="text-muted">31th May 2021</Card.Text>
            </Info>
          </ArticleDescription>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export default ProjectView;
