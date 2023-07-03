import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const RecipeList = styled.div`
  &.no-recipes {
    margin: 0;
  }

  &.has-recipes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    padding: 30px 100px 100px 50px;
  }

  @media screen and (max-width: 845px) {
    &.has-recipes {
      grid-template-columns: repeat(1, 1fr);
      padding: 30px 100px 100px 30px;
    }
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
  margin-left: 100px;
  margin-top: 50px;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 10px;
  color: #000;
  font-size: 1rem;
  text-align: center;
`;

export const NoRecipesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  grid-column: span 2;
`;

export const NoRecipesMessage = styled.div`
  text-align: center;
  line-height: 2;
  color: rgb(255, 66, 105);
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0 20px;
  span {
    display: block;
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;

    &:nth-child(1) {
      animation-delay: 0.2s;
    }

    &:nth-child(2) {
      animation-delay: 0.6s;
    }
    &:nth-child(3) {
      animation-delay: 0.9s;
    }
  }
  .go-home {
    font-size: 1.1rem;
    position: relative;
    padding-bottom: 5px;
    cursor: pointer;
    margin-top: 20px;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      width: 0;
      background: #ff6680;
      transition: width 0.4s ease-in-out;
    }

    &:hover::before {
      width: 35%;
    }
  }
`;

export const NoRecipesBackground = styled.div`
  background-image: url("/assets/navBarRecipe2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 30vh;

  position: absolute;
  z-index: -1; // Pour s'assurer que le fond est derrière le contenu
`;

export const NoRecipesContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
