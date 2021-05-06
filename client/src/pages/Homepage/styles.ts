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

export const SocialLinksContainer = styled.div`
  align-self: flex-start;
  margin-top: 0px;
  padding: 0px;

  transition: margin-top 0.4s, padding 0.4s, background-color 0.2s linear;

  &:hover {
    background-color: white;
    padding: 10px;

    @media (min-width: 900px) {
      margin-top: -18px;
    }

    a {
      color: black;
    }
  }

  @media screen and (max-width: 600px) {
    align-self: center;
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

export const ProfileImageContainer = styled.section`
  cursor: pointer;
  display: flex;

  justify-content: center;

  img {
    @media (min-width: 900px) {
      width: ${(props) => props.theme.imageSize.width};
      height: ${(props) => props.theme.imageSize.height};
    }
  }
`;
