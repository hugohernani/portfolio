import styled from 'styled-components';

export const ListItem = styled.li`
  &::before {
    content: '•';
    font-size: 130%;
    line-height: 0;
    margin: 0 0.3rem 0 -0.25rem;
    position: relative;
    top: 0.08rem;
    color: black;
  }
`;
