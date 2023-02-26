/* eslint-disable react/display-name */

import { useRoutes } from 'hookrouter';
import React from 'react';
import { Homepage } from 'src/pages';
// import ProjectsRouting from './ProjectsRouting';

// const routes = {
//  '/': () => <Homepage />,
//  '/portfolio*': ProjectsRouting,
//  '/projects*': ProjectsRouting,
// };

const routes = { '/': () => <Homepage /> };

const BrowserRoutes: React.FC = () => {
  const routesResult = useRoutes(routes);

  return <React.Fragment>{routesResult}</React.Fragment>;
};

export default BrowserRoutes;
