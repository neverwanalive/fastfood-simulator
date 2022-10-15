import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

export const StartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  padding: 5px;
  width: 100px;
  border: 1px solid black;
  border-radius: 7px;
  font-size: 25px;
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
`;
