/* eslint-disable react/display-name, @typescript-eslint/explicit-module-boundary-types, react/react-in-jsx-scope */

import React from 'react';
const PortfolioListing = React.lazy(() => import('./components/PortfolioListing'));
const ProjectView = React.lazy(() => import('./components/ProjectView'));

const routes = {
  '/projects': () => <PortfolioListing />,
  '/projects/:projectId': (projectId: any) => <ProjectView projectId={projectId} />,
  '/': () => <PortfolioListing />,
  '/:projectId': ({ projectId }: any) => <ProjectView projectId={projectId} />,
};

export default routes;
