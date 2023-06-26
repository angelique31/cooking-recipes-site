import styled from "styled-components";

export const StyledCard = styled.div`
  width: 300px;
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;
  position: relative;

  ${({ isInSavedRecipesPage }) =>
    isInSavedRecipesPage
      ? `
    display: flex;
    justify-content: center;
    align-items: center;
  `
      : `
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(hsla(0, 0%, 100%, 0), rgba(0, 0, 0, 0.5));
    }
  `}
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;

  ${({ isInSavedRecipesPage }) =>
    isInSavedRecipesPage
      ? `
        @media screen and (max-width: 1024px) {
          width: 80%;
        }
        @media screen and (max-width: 845px) {
          width: 100%;
        }
        height: 200px;
        
      `
      : `
        @media screen and (max-width: 686px) {
          height: 300px;
        }
        @media screen and (max-width: 560px) {
          height: 200px;
        }
      `}
`;

export const CardTitle = styled.h3`
  margin: 0;
  padding: 10px;
  margin: 0px;
  position: absolute;
  bottom: 0;
  color: white;
  font-size: 1rem;
`;
