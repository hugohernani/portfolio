import { useState } from 'react';
import { ProjectsAPI } from 'src/services';

const useProjectApi = (): ProjectsAPI => {
  const [projectApi] = useState<ProjectsAPI>(() => {
    const apiToken = localStorage.getItem('apiToken');
    return new ProjectsAPI(apiToken as string);
  });

  return projectApi;
};

export default useProjectApi;
