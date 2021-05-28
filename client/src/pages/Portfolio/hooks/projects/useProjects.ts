import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { IProject } from 'src/interfaces';
import useProjectApi from './useProjectApi';

type IUseProjects = UseQueryOptions<IProject[]>;

const useProjects = (queryProperties?: IUseProjects): UseQueryResult<IProject[]> => {
  const projectApi = useProjectApi();

  return useQuery<IProject[]>('projects', () => projectApi.getAll(), queryProperties);
};

export default useProjects;
