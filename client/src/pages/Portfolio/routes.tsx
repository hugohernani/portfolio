/* eslint-disable react/display-name, @typescript-eslint/explicit-module-boundary-types, react/react-in-jsx-scope */

import PortfolioListing from './components/PortfolioListing';

const Listing = <PortfolioListing />;

const routes = {
  '/projects': () => Listing,
  '/projects/:projectId': (projectId: any) => <h1>{projectId}</h1>,
  '/': () => Listing,
  '/:projectId': ({ projectId }: any) => <h1>test {projectId}</h1>,
};

export default routes;
