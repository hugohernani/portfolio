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
import { ISocialLinkConfig, IUserProfileImage } from './interfaces';
import UserPresentationProfileImage from './components/UserPresentationProfileImage';
import { ProfileManagementProvider } from 'src/providers';

const Homepage: React.FC = () => {
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
      <ProfileManagementProvider>
        <PortfolioNavigationHeader />
        <BannerSection>
          <ProfileContainer>
            <PresentationContainer>
              <PresentationInfoContainer>
                <UserPresentationCard />
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
      </ProfileManagementProvider>
    </Container>
  );
};

export default Homepage;
