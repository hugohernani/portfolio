import {
  BiographyContainer,
  CallOutContainer,
  CallOutButton,
  PresentationShortDescription,
  PresentationTitle,
} from './styles';
import React, { useMemo } from 'react';
import { ICallOutInfoButton, IUserInfo } from '../../interfaces';
import { Link } from 'react-router-dom';

type IUserPresentationCard = IUserInfo & ICallOutInfoButton;

const UserPresentationCard: React.FC<IUserPresentationCard> = ({
  title,
  shortDescription,
  portfolioCallOut,
  portfolioUrl,
  resumeCallOut,
  resumeUrl,
}) => {
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
