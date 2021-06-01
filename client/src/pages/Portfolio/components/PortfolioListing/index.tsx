import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IProject } from 'src/interfaces';
import { useProjects } from '../../hooks/projects';
import ProjectsSidebar from '../ProjectsSidebar';
import ProjectSidebarListing from '../ProjectsSidebar/ProjectSidebarListing';
import ProjectListing from './ProjectListing';

const PortfolioListing: React.FC = () => {
  const { data: projects, isSuccess } = useProjects();

  return (
    <Row className="py-3">
      <Col className="px-5" md={9}>
        {isSuccess && <ProjectListing projects={projects as IProject[]} />}
      </Col>
      <Col className="px-0 pr-5" md={3}>
        <ProjectsSidebar listingTitle="Projects" listingUrl="/projects">
          <ProjectSidebarListing />
        </ProjectsSidebar>
      </Col>
    </Row>
  );
};

export default PortfolioListing;
