import React from 'react';
import { renderWithRouter } from 'src/test-utils';
import PortfolioNavigationHeader from './index';

const resumeUrl = '/hugo-hernani-cv.pdf';
const renderPortfolioHeader = () => {
  return renderWithRouter(<PortfolioNavigationHeader resumeUrl={resumeUrl} />);
};

describe('PortfolioNavigationHeader', () => {
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
