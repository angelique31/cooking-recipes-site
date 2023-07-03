import styled from "styled-components";

import { ModifiedButton } from "../RecipeButton/RecipeButton.styled";

export const ModalButton = styled(ModifiedButton)`
  @media screen and (max-width: 600px) {
    display: block; // Cela annule le display: none; dans les styles de base
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  height: 220px;
  position: relative;
  @media screen and (max-width: 425px) {
    height: 250px;
    margin: 20px;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 40px;
  margin-right: 50px;
  @media screen and (max-width: 425px) {
    font-size: 1.3rem;
  }
`;

export const ModalParagraph = styled.p`
  margin-bottom: 40px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 9px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  // color: rgb(255, 66, 105);
  &:hover {
    color: rgb(255, 66, 105);
  }
`;
