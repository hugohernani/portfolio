export interface IProject {
  id: string;
  title: string;
  technology?: string;
  shortDescription?: string;
  content: string;
}

export interface IProjectListing {
  projects: IProject[];
}

export interface IProjectView {
  project: IProject;
}
