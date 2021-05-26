import { AxiosInstance } from 'axios';
import { IProject } from 'src/interfaces';
import { ApiFactory } from '../ApiFactory';

export default class ProjectsAPI {
  private api: AxiosInstance;

  constructor(apiToken: string) {
    this.api = ApiFactory.createAxiosInstance({
      baseURL: `${process.env?.REACT_APP_SERVER_BASE_URL || ''}/projects`,
      responseType: 'json',
      headers: {
        Accept: 'application/vnd.portfolio.v1+json',
        'Content-Type': 'application/json',
        'X-API-Key': apiToken,
      },
    });
  }

  async getAll(): Promise<IProject[]> {
    const response = await this.api.get<IProject[]>('/');
    return response.data;
  }

  async get(projectId: string): Promise<IProject> {
    const response = await this.api.get<IProject>(`/${projectId}`);
    return response.data;
  }
}
