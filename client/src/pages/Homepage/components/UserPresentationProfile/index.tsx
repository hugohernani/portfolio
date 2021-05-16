import React, { useCallback, useState } from 'react';
import { Container } from './styles';
import Image from './Image';

interface IUserProfileImage {
  url: string;
  hoverUrl: string;
  description: string;
  width: string;
  height: string;
}

const UserPresentationProfile: React.FC = () => {
  const [userProfileImage] = useState<IUserProfileImage>({
    url: 'me-avatar.svg',
    hoverUrl: 'me-avatar-wink.svg',
    description: 'Hugo Hernani',
    width: '560px',
    height: '600px',
  });

  const [sourceUrl, setSourceUrl] = useState(userProfileImage.url);

  const profileImageSizeCb = useCallback(() => {
    const { width, height } = userProfileImage;
    return { width, height };
  }, [userProfileImage]);

  const handleImageOver = useCallback(() => {
    setSourceUrl(userProfileImage.hoverUrl);
  }, [userProfileImage.hoverUrl]);

  const handleImageOut = useCallback(() => {
    setSourceUrl(userProfileImage.url);
  }, [userProfileImage.url]);

  return (
    <Container theme={{ imageSize: profileImageSizeCb() }}>
      <Image
        onImageMouseOver={handleImageOver}
        onImageMouseOut={handleImageOut}
        url={sourceUrl}
        description={userProfileImage.description}
      />
    </Container>
  );
};

export default UserPresentationProfile;
