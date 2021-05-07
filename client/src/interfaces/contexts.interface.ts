import { IProfile } from './profile.interface';

export interface IProfileContext extends IProfile {
  resumeCallOut: string;
  portfolioCallOut: string;
  portfolioUrl: string;
}
