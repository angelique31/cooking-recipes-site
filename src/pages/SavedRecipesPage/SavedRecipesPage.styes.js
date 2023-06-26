import styled from "styled-components";

export const RecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 50px;
  @media screen and (max-width: 845px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RecipeItem = styled.div`
  align-items: center;
  max-width: 80%;
  transition: all 0.5s ease-out; /* Ajoute une transition douce */
  opacity: 1; /* Opacité initiale de 1 */
  transition: 0.8s;
  /* Le code suivant sera utilisé pour l'effet de disparition */
  &.removing {
    transform: scale(0.8);
    opacity: 0;
  }
  &:hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 1217px) {
    max-width: 100%;
  }
  @media screen and (max-width: 1030px) {
    max-width: 100%;
  }
`;

export const DeleteContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: rgb(255, 66, 105);
  }
`;

export const TrashIcon = styled.img`
  margin-right: 10px;
`;

export const DeleteText = styled.span`
  margin-right: 5px;
`;

export const PageTitle = styled.h1`
  margin-left: 50px;
  margin-top: 50px;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 10px;
  color: #000;
  font-size: 1rem;
  text-align: center;
`;
