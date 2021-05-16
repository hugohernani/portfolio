import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homepage, Portfolio } from 'src/pages';
import PageLayout from 'src/pages/components/PageLayout';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />
    <PageLayout>
      <Route path="/portfolio" exact component={Portfolio} />
    </PageLayout>
  </Switch>
);

export default Routes;
