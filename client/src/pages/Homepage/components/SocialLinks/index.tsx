import { Container, SocialLinksContainer } from './styles';
import React, { useMemo, useState } from 'react';
import { FaGithub, FaInstagram, FaMailBulk } from 'react-icons/fa';
import { ISocialLinkConfig } from '../../interfaces';

const SocialLinks: React.FC = () => {
  const [socialLinkConfig] = useState<ISocialLinkConfig>({
    iconColor: '#000000',
    textColor: '#ffffff',
  });

  return useMemo(
    () => (
      <SocialLinksContainer>
        <Container theme={socialLinkConfig}>
          <a href="https://github.com/hugohernani" target="_blank" rel="noopener noreferrer">
            <FaGithub size="25px" color={socialLinkConfig.iconColor} />
            <span>hugohernani</span>
          </a>
          <a href="https://instagram.com/hugo.hernani/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size="25px" color={socialLinkConfig.iconColor} />
            <span>hugo.hernani</span>
          </a>
          <a href="mailto:hhernanni@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaMailBulk size="25px" color={socialLinkConfig.iconColor} />
            <span>hhernanni@gmail.com</span>
          </a>
        </Container>
      </SocialLinksContainer>
    ),
    [socialLinkConfig],
  );
};

export default SocialLinks;
