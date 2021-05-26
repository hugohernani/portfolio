import { useState } from 'react';
import { useQuery } from 'react-query';
import { IProject } from 'src/interfaces';
import { ProjectsAPI } from 'src/services';

interface IUseProjects {
  projects: IProject[];
  isLoading: boolean;
  isSuccess: boolean;
}

const useProjects = (): IUseProjects => {
  const [projectApi] = useState<ProjectsAPI>(() => {
    const apiToken = localStorage.getItem('apiToken');
    return new ProjectsAPI(apiToken as string);
  });

  const { data: projects, isLoading, isSuccess } = useQuery<IProject[], any>('projects', () => projectApi.getAll());
  return { projects: projects as IProject[], isLoading, isSuccess };
};

export default useProjects;
