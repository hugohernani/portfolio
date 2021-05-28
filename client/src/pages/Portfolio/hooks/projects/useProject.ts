import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { IProject } from 'src/interfaces';
import useProjectApi from './useProjectApi';

interface IBaseUseProject {
  projectId: string;
}

type IUseProject = IBaseUseProject & UseQueryOptions<IProject>;

const useProject = ({ projectId, ...queryProperties }: IUseProject): UseQueryResult<IProject> => {
  const projectApi = useProjectApi();

  return useQuery(['project', projectId], () => projectApi.get(projectId), queryProperties);
};

export default useProject;
