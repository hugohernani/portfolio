export interface IProject {
  id: string;
  title: string;
  technology?: string;
  shortDescription?: string;
}

export interface IProjectListing {
  projects: IProject[];
}
