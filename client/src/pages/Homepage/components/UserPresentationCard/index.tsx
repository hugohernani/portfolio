import {
  BiographyContainer,
  CallOutContainer,
  CallOutButton,
  PresentationShortDescription,
  PresentationTitle,
} from './styles';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import useProfileState from 'src/hooks/profiles';

const UserPresentationCard: React.FC = () => {
  const { title, shortDescription, portfolioCallOut, portfolioUrl, resumeCallOut, resumeUrl } = useProfileState();

  return useMemo(
    () => (
      <BiographyContainer>
        <PresentationTitle>{title}</PresentationTitle>
        <PresentationShortDescription>{shortDescription}</PresentationShortDescription>

        <CallOutContainer>
          <Link to={resumeUrl}>
            <CallOutButton>{resumeCallOut}</CallOutButton>
          </Link>
          <Link to={portfolioUrl}>
            <CallOutButton>{portfolioCallOut}</CallOutButton>
          </Link>
        </CallOutContainer>
      </BiographyContainer>
    ),
    [portfolioCallOut, portfolioUrl, resumeCallOut, resumeUrl, shortDescription, title],
  );
};

export default UserPresentationCard;
