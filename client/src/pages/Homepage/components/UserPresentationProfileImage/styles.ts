import styled from 'styled-components';

export const BiographyContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

export const PresentationTitle = styled.h1`
  margin-bottom: 20px;
`;

export const PresentationShortDescription = styled.div`
  line-height: 1.65;
  margin-bottom: 20px;
`;

export const PortfolioCallOutContainer = styled.div`
  text-transform: uppercase;

  background-color: #89d8eb;
  padding: 10px 20px;

  border: 1px thin darkblue;
  border-radius: 10px;

  margin: 10px 0px;

  a {
    color: black;
  }
`;
