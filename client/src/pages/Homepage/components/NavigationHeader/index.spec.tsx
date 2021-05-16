import React from 'react';
import { ProfileContext } from 'src/contexts';
import { IProfileContext } from 'src/interfaces';
import { renderWithRouter } from 'src/test-utils';
import NavigationHeader from './index';

const resumeUrl = '/test';
const renderPortfolioHeader = () => {
  return renderWithRouter(
    <ProfileContext.Provider value={{ resumeUrl } as IProfileContext}>
      <NavigationHeader />
    </ProfileContext.Provider>,
  );
};

describe('NavigationHeader', () => {
  test('renders component', () => {
    renderPortfolioHeader();
  });

  test('renders Home NavLink within component', () => {
    const { getAllByRole } = renderPortfolioHeader();
    const [homeLink] = getAllByRole('link');
    expect(homeLink).toHaveAttribute('href', '/');
  });

  test('renders Resume Link', () => {
    const { getAllByRole } = renderPortfolioHeader();

    const [, resumeUrlLink] = getAllByRole('link');
    expect(resumeUrlLink).toHaveAttribute('href', resumeUrl);
  });
});
