import styled from 'styled-components';

export const Container = styled.div``;

export const BannerSection = styled.div`
  background-color: transparent;

  @media (min-width: 900px) {
    display: flex;
    align-items: stretch;
    flex-flow: row wrap;
    justify-content: space-evenly;

    margin: -10px 100px 10px 100px;
    min-height: 100vh;

    section {
      flex-basis: 46%;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const PresentationContainer = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;

  margin: 10px 0px 0px 0px;
`;

export const PresentationInfoContainer = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;
