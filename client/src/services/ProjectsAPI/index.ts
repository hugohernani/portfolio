import { AxiosInstance } from 'axios';
import { IProject } from 'src/interfaces';
import { ApiFactory } from '../ApiFactory';

export default class ProjectsApi {
  private api: AxiosInstance;

  constructor(api_token: string) {
    this.api = ApiFactory.createAxiosInstance({
      baseURL: process.env.REACT_APP_SERVER_BASE_URL as string,
      responseType: 'json',
      headers: {
        Accept: 'application/vnd.portfolio.v1+json',
        'Content-Type': 'application/json',
        'X-API-Key': api_token,
      },
    });
  }

  async getAll(): Promise<IProject[]> {
    const response = await this.api.get<IProject[]>('/project');
    return response.data;
  }

  async get(projectId: string): Promise<IProject> {
    const response = await this.api.get<IProject>(`/project${projectId}`);
    return response.data;
  }
}
