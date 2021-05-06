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
