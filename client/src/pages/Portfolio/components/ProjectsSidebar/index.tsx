import { A } from 'hookrouter';
import React from 'react';
import { Card, NavLink } from 'react-bootstrap';
import { Container } from './styles';

interface IProjectsSidebar {
  listingTitle: string;
  listingUrl: string;
}

const ProjectsSidebar: React.FC<IProjectsSidebar> = ({ listingTitle, listingUrl, children }) => {
  return (
    <Container>
      <Card>
        <Card.Header className="text-center bg-white">
          <NavLink as={A} className="btn btn-light btn-block" href={listingUrl}>
            {listingTitle}
          </NavLink>
        </Card.Header>
      </Card>
    </Container>
  );
};

export default ProjectsSidebar;
