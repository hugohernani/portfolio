import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }

  a {
    color: ${(props) => props.theme.textColor || 'black'};
    display: flex;
    align-items: center;

    transition: color 0.4s linear;

    & ~ a {
      margin-left: 30px;

      @media screen and (max-width: 600px) {
        margin-left: 5px;
      }
    }

    span {
      padding-left: 5px;
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
