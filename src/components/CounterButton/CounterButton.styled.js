import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 180px;
  height: 40px;
  font-family: "Open Sans", sans-serif;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(201, 189, 187);
  border-radius: 8px;
  user-select: none;
  width: 18%;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: transparent;
  font-size: 2rem;
  color: rgb(133 125 125);
  cursor: pointer;
  width: 33px;
  border: none;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:active {
    background-color: rgba(
      0,
      0,
      0,
      0.1
    ); // couleur de fond quand le bouton est enfoncé
  }
`;

export const LeftButton = styled(Button)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-right: 1px solid rgb(201, 189, 187);
`;

export const RightButton = styled(Button)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left: 1px solid rgb(201, 189, 187);
`;

export const CountDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;

  span:first-child {
    margin-right: 5px;
    color: rgb(255, 66, 105);
    font-weight: 700;
  }

  span:last-child {
    color: rgb(255, 66, 105);
    font-weight: 700;
  }
`;
