import { BannerSection, Container, PresentationContainer, PresentationInfoContainer, ProfileContainer } from './styles';
import React from 'react';
import NavigationHeader from './components/NavigationHeader';
import NavigationBottom from './components/NavigationBottom';
import SocialLinks from './components/SocialLinks';
import UserPresentationCard from './components/UserPresentationCard';
import UserPresentationProfile from './components/UserPresentationProfile';
import { ProfileManagementProvider } from 'src/providers';

const Homepage: React.FC = () => {
  return (
    <Container>
      <ProfileManagementProvider>
        <NavigationHeader />
        <BannerSection>
          <ProfileContainer>
            <PresentationContainer>
              <PresentationInfoContainer>
                <UserPresentationCard />
              </PresentationInfoContainer>
            </PresentationContainer>
            <UserPresentationProfile />
          </ProfileContainer>
          <SocialLinks />
        </BannerSection>
        <NavigationBottom />
      </ProfileManagementProvider>
    </Container>
  );
};

export default Homepage;
