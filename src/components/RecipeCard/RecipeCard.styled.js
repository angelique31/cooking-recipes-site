import styled from "styled-components";

export const StyledHeartButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px; /* Taille du cercle */
  height: 30px; /* Taille du cercle */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
  visibility: hidden; /* Cacher initialement le cœur */
  opacity: 0;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  &:hover {
    background-color: rgb(255, 66, 105);
  }
  @media (hover: none) and (pointer: coarse) {
    /* Styles pour les appareils tactiles */
    visibility: visible;
    opacity: 1;
  }
`;

export const StyledCard = styled.div`
  width: 300px;
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;
  position: relative;
  transition: 0.9s;

  &:hover {
    transform: scale(1.01); /* Agrandir légèrement la carte au survol */

    ${StyledHeartButton} {
      visibility: visible; /* Faire apparaître le cœur lorsque la carte est survolée */
      opacity: 1; /* Transition de l'opacité */
    }
    @media (hover: none) and (pointer: coarse) {
      /* Désactiver l'effet de mise à l'échelle sur les appareils tactiles */
      &:hover {
        transform: none;
      }
    }
  }
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

export const HeartIcon = styled.img`
  filter: invert(77%) sepia(55%) saturate(5000%) hue-rotate(327deg)
    brightness(100%) contrast(89%);
  transition: filter 0.3s ease, transform 0.5s ease;
  &:hover {
    filter: brightness(0) invert(1);
    transform: scale(1.1);
  }
`;
