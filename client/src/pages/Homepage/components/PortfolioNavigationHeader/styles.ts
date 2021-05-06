import styled from 'styled-components';

export const BaseHeaderContainer = styled.div`
  display: flex;
  justify-content: stretch;
  width: 100%;
`;

export const NavContainer = styled.nav`
  min-height: 60px;
  background-color: whitesmoke;
  padding: 0px 30px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;

  width: 100%;

  a,
  a.active {
    color: black;
  }

  @media screen and (max-width: 600px) {
    justify-content: space-evenly;
  }
`;
