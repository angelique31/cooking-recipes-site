import styled from "styled-components";
import { keyframes } from "styled-components";

const combinedMove = keyframes`
  0% { transform: translate(-100%, -100%) scale(0); }
  100% { transform: translate(0, 0) scale(1); }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 300px;
  height: 180px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  animation: ${combinedMove} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const Button = styled.button`
  margin-top: 42px;
  padding: 10px 20px;
  background-color: rgb(255, 66, 105);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -3px;
  right: 5px;
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  &:hover {
    color: rgb(255, 66, 105);
  }
`;

export const StyledP = styled.p`
  margin-top: 20px;
`;
