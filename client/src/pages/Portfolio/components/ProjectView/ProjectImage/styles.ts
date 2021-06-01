import styled from 'styled-components';

export const Container = styled.div`
  .card-img-top {
    opacity: 0.2;
  }

  .card-img-overlay {
    display: flex;
  }
`;

export const ArticleDescription = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  justify-content: space-evenly;

  width: 70%;
`;

export const Technologies = styled.div`
  .badge {
    padding: 15px 30px;

    font-size: 100%;
    text-transform: uppercase;
  }
`;

export const Title = styled.h1``;

export const Info = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;

  text-transform: uppercase;

  p:not(:last-child) {
    padding-left: 5px;
    padding-right: 5px;
    border-right: 1px solid red;
  }

  p:last-child {
    padding-left: 5px;
  }

  > * {
    margin: 0px;
  }
`;
