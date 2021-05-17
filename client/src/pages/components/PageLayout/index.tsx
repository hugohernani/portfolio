import React from 'react';
import { Row } from 'react-bootstrap';
import NavigationBottom from 'src/components/NavigationBottom';
import NavigationHeader from 'src/components/NavigationHeader';

const PageLayout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <NavigationHeader />
      <Row>{children}</Row>
      <NavigationBottom />
    </React.Fragment>
  );
};

export default PageLayout;
