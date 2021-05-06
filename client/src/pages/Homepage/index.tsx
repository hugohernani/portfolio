import {
  BannerSection,
  Container,
  PresentationContainer,
  PresentationInfoContainer,
  ProfileContainer,
  ProfileImageContainer,
  SocialLinksContainer,
} from './styles';
import React, { useCallback, useState } from 'react';
import PortfolioNavigationHeader from './components/PortfolioNavigationHeader';
import PortfolioNavigationBottom from './components/PortfolioNavigationBottom';
import SocialLinks from './components/SocialLinks';
import UserPresentationCard from './components/UserPresentationCard';
import { ICallOutInfoButton, ISocialLinkConfig, IUserInfo, IUserProfileImage } from './interfaces';
import UserPresentationProfileImage from './components/UserPresentationProfileImage';

const Homepage: React.FC = () => {
  const [userPresentationInfo] = useState<IUserInfo & ICallOutInfoButton>({
    title: 'Web Developer',
    shortDescription: `
      Hi, I am coder. I build software things. And I love that I am able to do so.
      Besides having a degree in computer science, I am a fullstack web developer. Wanna see a short description of my career and some of the things I have done in technology? Then my resume will show you this.
      But do you wanna see in action what kind of things I have built and the current projects and technologies I have being working on? Then check out my portfolio.
      `,
    resumeCallOut: 'Resume',
    portfolioCallOut: 'Portfolio',
    resumeUrl: '/hugo-hernani-cv.pdf',
    portfolioUrl: '/portfolio',
  });

  const [userProfileImage] = useState<IUserProfileImage>({
    url: 'me-avatar.svg',
    hoverUrl: 'me-avatar-wink.svg',
    description: 'Hugo Hernani',
    width: '560px',
    height: '600px',
  });

  const [socialLinkConfig] = useState<ISocialLinkConfig>({
    iconColor: '#000000',
    textColor: '#ffffff',
  });

  const profileImageSizeCb = useCallback(() => {
    const { width, height } = userProfileImage;
    return { width, height };
  }, [userProfileImage]);

  return (
    <Container>
      <PortfolioNavigationHeader />
      <BannerSection>
        <ProfileContainer>
          <PresentationContainer>
            <PresentationInfoContainer>
              <UserPresentationCard {...userPresentationInfo} />
            </PresentationInfoContainer>
          </PresentationContainer>

          <ProfileImageContainer theme={{ imageSize: profileImageSizeCb() }}>
            <UserPresentationProfileImage {...userProfileImage} />
          </ProfileImageContainer>
        </ProfileContainer>
        <SocialLinksContainer>
          <SocialLinks {...socialLinkConfig} />
        </SocialLinksContainer>
      </BannerSection>

      <PortfolioNavigationBottom />
    </Container>
  );
};

export default Homepage;
