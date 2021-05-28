/* eslint-disable react/display-name */

import { useRoutes } from 'hookrouter';
import React from 'react';
import { Homepage, Portfolio } from 'src/pages';
import PageLayout from 'src/pages/components/PageLayout';

const pageRoutes = {
  '/portfolio*': () => <Portfolio />,
  '/projects*': () => <Portfolio />,
};

const BrowserRoutes: React.FC = () => {
  const rootRoute = useRoutes({ '/': () => <Homepage /> });
  const pageRoutesResults = useRoutes(pageRoutes);

  return (
    <React.Fragment>
      {rootRoute}
      <PageLayout>{pageRoutesResults}</PageLayout>
    </React.Fragment>
  );

  // <Switch>
  //   <Route exact path="/" component={Homepage} />
  //   <PageLayout>
  //     <Route path={['/portfolio', '/projects']}>
  //       <Portfolio />
  //     </Route>
  //   </PageLayout>
  // </Switch>
};

export default BrowserRoutes;
