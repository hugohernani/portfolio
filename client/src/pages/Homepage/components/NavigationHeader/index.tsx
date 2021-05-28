import { BaseHeaderContainer, NavContainer } from './styles';
import React, { useMemo } from 'react';
import { A } from 'hookrouter';
import useProfileState from 'src/hooks/profiles';

const NavigationHeader: React.FC = ({ children }) => {
  const { resumeUrl } = useProfileState();

  return useMemo(
    () => (
      <BaseHeaderContainer>
        <NavContainer>
          <A href="/">Hugo Hernani</A>
          {children}
          <a href={resumeUrl} download target="_blank" rel="noreferrer">
            My Resume
          </a>
        </NavContainer>
      </BaseHeaderContainer>
    ),
    [children, resumeUrl],
  );
};

export default NavigationHeader;
