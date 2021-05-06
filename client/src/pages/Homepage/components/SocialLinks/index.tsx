import { Container } from './styles';
import React, { useMemo, useState } from 'react';
import { FaGithub, FaInstagram, FaMailBulk } from 'react-icons/fa';
import { ISocialLinkConfig } from '../../interfaces';

const SocialLinks: React.FC<ISocialLinkConfig> = ({
  iconColor,
  textColor = { iconColor: 'black', textColor: 'white' },
}) => {
  const [socialLinkTheme] = useState({ textColor });

  return useMemo(
    () => (
      <Container theme={socialLinkTheme}>
        <a href="https://github.com/hugohernani" target="_blank" rel="noopener noreferrer">
          <FaGithub size="25px" color={iconColor} />
          <span>hugohernani</span>
        </a>
        <a href="https://instagram.com/hugo.hernani/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size="25px" color={iconColor} />
          <span>hugo.hernani</span>
        </a>
        <a href="mailto:hhernanni@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaMailBulk size="25px" color={iconColor} />
          <span>hhernanni@gmail.com</span>
        </a>
      </Container>
    ),
    [iconColor, socialLinkTheme],
  );
};

export default SocialLinks;
