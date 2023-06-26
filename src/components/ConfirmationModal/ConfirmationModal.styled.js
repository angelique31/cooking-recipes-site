import styled from "styled-components";

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
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 40px;
`;

export const ModalParagraph = styled.p`
  margin-bottom: 40px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: rgb(255, 66, 105);
  }
`;
