import { BaseHeaderContainer, NavContainer } from './styles';
import React, { useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const PortfolioNavigationHeader: React.FC = ({ children }) => {
  const [resumeUrl] = useState<string>('/hugo-hernani-cv.pdf');

  return useMemo(
    () => (
      <BaseHeaderContainer>
        <NavContainer>
          <NavLink to="/">Hugo Hernani</NavLink>
          {children}
          <Link to={resumeUrl} download target="_blank">
            My Resume
          </Link>
        </NavContainer>
      </BaseHeaderContainer>
    ),
    [children, resumeUrl],
  );
};

export default PortfolioNavigationHeader;
