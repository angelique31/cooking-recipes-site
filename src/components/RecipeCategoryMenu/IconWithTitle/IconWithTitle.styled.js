import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 15px;
`;

export const SectionDiv = styled.div`
  width: 80px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledH2 = styled.h2`
  font-size: 1rem;
  color: black;
`;
