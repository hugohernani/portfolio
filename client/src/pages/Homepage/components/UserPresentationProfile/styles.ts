import styled from 'styled-components';

export const Container = styled.section`
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
