import React from 'react';
import { ProfileContext } from 'src/contexts';
import { IProfile, IProfileContext } from 'src/interfaces';

const ProfileManagementProvider: React.FC = (props) => {
  const profileData: IProfile = {
    title: 'Web Developer',
    shortDescription: `
      Hi, I am coder. I build software things. And I love that I am able to do so.
      Besides having a degree in computer science, I am a fullstack web developer. Wanna see a short description of my career and some of the things I have done in technology? Then my resume will show you this.
      But do you wanna see in action what kind of things I have built and the current projects and technologies I have being working on? Then check out my portfolio.
      `,
    resumeUrl: '/hugo-hernani-cv.pdf',
  };
  const providerValue: IProfileContext = {
    ...profileData,
    portfolioCallOut: 'Portfolio',
    resumeCallOut: 'Resume',
    portfolioUrl: '/portfolio',
  };

  return (
    <ProfileContext.Provider value={providerValue} {...props}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileManagementProvider;
