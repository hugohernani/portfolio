import {
  BiographyContainer,
  CallOutContainer,
  CallOutButton,
  PresentationShortDescription,
  PresentationTitle,
} from './styles';
import React, { useMemo } from 'react';
import useProfileState from 'src/hooks/profiles';

const UserPresentationCard: React.FC = () => {
  const { title, shortDescription, portfolioCallOut, portfolioUrl, resumeCallOut, resumeUrl } = useProfileState();

  return useMemo(
    () => (
      <BiographyContainer>
        <PresentationTitle>{title}</PresentationTitle>
        <PresentationShortDescription>{shortDescription}</PresentationShortDescription>

        <CallOutContainer>
          <a href={resumeUrl}>
            <CallOutButton>{resumeCallOut}</CallOutButton>
          </a>
          <a href={portfolioUrl}>
            <CallOutButton>{portfolioCallOut}</CallOutButton>
          </a>
        </CallOutContainer>
      </BiographyContainer>
    ),
    [portfolioCallOut, portfolioUrl, resumeCallOut, resumeUrl, shortDescription, title],
  );
};

export default UserPresentationCard;
