import styled from 'styled-components';

export const BaseBottomContainer = styled.div`
  display: flex;
  justify-content: stretch;
  width: 100%;
`;

export const NavContainer = styled.nav`
  min-height: 50px;
  background-color: whitesmoke;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 100vw;

  a,
  a.active {
    color: black;
  }
`;

export const Copyright = styled.div``;
