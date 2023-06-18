import styled from "styled-components";
import SearchButton from "../NavBar/SearchButton/SearchButton.styled";

export const ModifiedButton = styled(SearchButton)`
  background-color: rgb(255, 66, 105);
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 25px;
  font-size: 1rem;
  padding: 9px 24px;
  margin-top: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  transition: all 0.15s ease-in-out;
  transform: translateY(0);
  margin: auto;

  &:hover {
    background-color: rgb(233 34 75);
  }

  &:active {
    background-color: rgb(210, 20, 65);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
    transform: translateY(3px);
  }
`;
