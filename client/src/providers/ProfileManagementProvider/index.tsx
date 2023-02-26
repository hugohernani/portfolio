import React from 'react';
import { ProfileContext } from 'src/contexts';
import { IProfile, IProfileContext } from 'src/interfaces';

const ProfileManagementProvider: React.FC = (props) => {
  const profileData: IProfile = {
    title: 'Programmer',
    shortDescription: `
      Hi, I am a software engineer and I love how that makes me able to build projects from scratch and leverage incredible ideas.
      I have a bachelor's degree in computer science and have created my professional career by working in many Industry sectors.
      I am always aiming for performant, clean, and functional code with intelligent and fast delivery.
      If you want to see a short description of my career then download my most recent resume.
      You can also download a cover letter from one of my employers.
      `,
    resumeUrl: '/hugo-hernani-cv.pdf',
  };
  const providerValue: IProfileContext = {
    ...profileData,
    portfolioCallOut: 'Cover Letter',
    resumeCallOut: 'Resume',
    portfolioUrl: '/hugo-hernani-cover-letter.pdf',
  };

  return (
    <ProfileContext.Provider value={providerValue} {...props}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileManagementProvider;
