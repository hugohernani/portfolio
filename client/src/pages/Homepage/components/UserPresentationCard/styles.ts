import styled from 'styled-components';

export const BiographyContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    align-items: center;
  }
`;

export const PresentationTitle = styled.h1`
  cursor: grab;
  font-family: 'cursive';
  font-size: 8vw;
  color: white;
  margin-bottom: 20px;

  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);

  transition: transform 0.4s, color 0.4s linear;

  &:hover {
    color: #efefef;
  }
`;

export const PresentationShortDescription = styled.div`
  font-family: 'monospace';
  text-align: justify;
  line-height: 1.65;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    margin: 0px 20px 20px 20px;
  }
`;

export const CallOutContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 51%;

  @media screen and (max-width: 600px) {
    width: 80%;
    justify-content: space-evenly;
  }

  a {
    color: black;
  }
`;

export const CallOutButton = styled.div`
  cursor: pointer;

  text-transform: uppercase;

  background-color: whitesmoke;
  padding: 15px 30px;

  border: 1px solid black;
  border-radius: 10px;

  margin: 10px 0px;

  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.75);
  transform: scale(1);

  transition: transform 0.4s, box-shadow 0.4s linear;

  &:hover {
    transform: scale(1.1);
  }
`;
