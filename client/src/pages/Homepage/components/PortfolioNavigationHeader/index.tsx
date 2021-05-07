import { BaseHeaderContainer, NavContainer } from './styles';
import React, { useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface IPortfolioNavigationHeader {
  resumeUrl: string;
}

const PortfolioNavigationHeader: React.FC<IPortfolioNavigationHeader> = ({ resumeUrl, children }) => {
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
