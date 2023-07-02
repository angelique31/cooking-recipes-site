import styled from "styled-components";
import SearchButton from "../NavBar/SearchButton/SearchButton.styled";

export const ModifiedButton = styled(SearchButton)`
  background-color: rgb(255, 66, 105);
  display: flex;
  align-items: center;
  gap: 10px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  transition: all 0.15s ease-in-out;
  position: relative;
  left: 48%;
  transform: translateX(-50%) translateY(0);
  padding: 0px 20px;
  font-size: 0.9rem;
  border-radius: 15px;

  &:hover {
    background-color: rgb(233, 34, 75);
  }

  &:active {
    background-color: rgb(210, 20, 65);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
    transform: translateX(-50%) translateY(3px);
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
