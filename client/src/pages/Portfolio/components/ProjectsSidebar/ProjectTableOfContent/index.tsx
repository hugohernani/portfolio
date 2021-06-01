import React, { useMemo } from 'react';
import { ListGroup } from 'react-bootstrap';

const ProjectTableOfContent: React.FC = () => {
  return useMemo(() => <ListGroup variant="flush"></ListGroup>, []);
};

export default ProjectTableOfContent;
