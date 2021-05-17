import { useState } from 'react';
import { useQuery } from 'react-query';
import { IProject } from 'src/interfaces';
import { ProjectsAPI } from 'src/services';

interface IUseProjects {
  projects: IProject[];
}

const useProjects = (): IUseProjects => {
  const [projectApi] = useState<ProjectsAPI>(() => {
    const apiToken = localStorage.getItem('apiToken');
    return new ProjectsAPI(apiToken as string);
  });

  const { data: projects } = useQuery<IProject[], any>('projects', () => projectApi.getAll());

  // const [projects] = useState<IProject[]>([
  //   {
  //     id: '1',
  //     title: 'Website 1',
  //     technology: 'React',
  //     shortDescription:
  //       'Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum ',
  //   },
  //   {
  //     id: '2',
  //     title: 'Website 2',
  //     technology: 'Ruby on Rails',
  //     shortDescription:
  //       'Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum ',
  //   },
  //   {
  //     id: '3',
  //     title: 'Website 3',
  //     technology: 'Elixir',
  //     shortDescription:
  //       'Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum ',
  //   },
  // ]);

  return { projects: projects as IProject[] };
};

export default useProjects;
