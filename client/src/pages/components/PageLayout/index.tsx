import React from 'react';
import NavigationBottom from 'src/components/NavigationBottom';
import NavigationHeader from 'src/components/NavigationHeader';

const PageLayout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <NavigationHeader />
      {children}
      <NavigationBottom />
    </React.Fragment>
  );
};

export default PageLayout;
