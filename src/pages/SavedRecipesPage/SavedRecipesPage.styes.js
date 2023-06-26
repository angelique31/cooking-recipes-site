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

  /* Le code suivant sera utilisé pour l'effet de disparition */
  &.removing {
    transform: scale(0.8); /* Réduit l'échelle de l'élément */
    opacity: 0; /* Réduit l'opacité à 0 */
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
`;

export const TrashIcon = styled.img`
  margin-right: 10px;
`;

export const DeleteText = styled.span`
  margin-right: 5px;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 10px;
  color: #000; // ou une autre couleur de votre choix
  font-size: 1rem;
`;
