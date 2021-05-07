import { within } from '@testing-library/react';
import React from 'react';
import { ProfileContext } from 'src/contexts';
import { IProfileContext } from 'src/interfaces';
import { renderWithRouter } from 'src/test-utils';
import UserPresentationCard from './index';

const profileState: IProfileContext = {
  resumeUrl: '/test',
  portfolioCallOut: 'Portfolio',
  portfolioUrl: '/portfolio',
  resumeCallOut: 'CV',
  shortDescription: 'Lorem Ipsum',
  title: 'Web Developer',
};

const renderPortfolioHeader = () => {
  return renderWithRouter(
    <ProfileContext.Provider value={profileState}>
      <UserPresentationCard />
    </ProfileContext.Provider>,
  );
};

describe('UserPresentationCard', () => {
  test('renders component', () => {
    renderPortfolioHeader();
  });

  test('renders profile title within component', () => {
    const { getByText } = renderPortfolioHeader();

    expect(getByText(profileState.title)).toBeInTheDocument();
  });

  test('renders profile description within component', () => {
    const { getByText } = renderPortfolioHeader();

    expect(getByText(profileState.shortDescription)).toBeInTheDocument();
  });

  test('renders profile resume and portfolio callout text within their links in the component', () => {
    const { getAllByRole } = renderPortfolioHeader();
    const [resumeUrlLink, portfolioUrlLink] = getAllByRole('link');

    const resumeLinkInnerHtml = within(resumeUrlLink);
    const portfolioLinkInnerHtml = within(portfolioUrlLink);

    expect(resumeLinkInnerHtml.getByText(profileState.resumeCallOut)).toBeInTheDocument();
    expect(portfolioLinkInnerHtml.getByText(profileState.portfolioCallOut)).toBeInTheDocument();
  });

  test('renders Resume and Portfolio Links', () => {
    const { getAllByRole } = renderPortfolioHeader();
    const [resumeUrlLink, portfolioUrlLink] = getAllByRole('link');

    expect(resumeUrlLink).toHaveAttribute('href', profileState.resumeUrl);
    expect(portfolioUrlLink).toHaveAttribute('href', profileState.portfolioUrl);
  });
});
