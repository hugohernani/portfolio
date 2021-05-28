import { Provider } from 'jotai';
import React from 'react';
import NavigationBottom from 'src/components/NavigationBottom';
import NavigationHeader from 'src/components/NavigationHeader';

const PageLayout: React.FC = ({ children }) => {
  return (
    <Provider>
      <NavigationHeader />
      {children}
      <NavigationBottom />
    </Provider>
  );
};

export default PageLayout;
