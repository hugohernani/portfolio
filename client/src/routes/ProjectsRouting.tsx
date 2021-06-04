import React, { Suspense } from 'react';
import PageLayout from 'src/pages/components/PageLayout';

const Portfolio = React.lazy(() => import('src/pages/Portfolio'));

const ProjectsRouting: React.FC = () => (
  <PageLayout>
    <Suspense fallback={<div>Loading...</div>}>
      <Portfolio />
    </Suspense>
    ;
  </PageLayout>
);

export default ProjectsRouting;
