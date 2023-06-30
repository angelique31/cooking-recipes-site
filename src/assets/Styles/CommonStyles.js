// CommonStyles.js
import styled from "styled-components";

export const CommonSection = styled.section`
  display: grid;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: black;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 20px;
  margin: 50px 100px 50px 100px;
  @media screen and (max-width: 876px) {
    border: none;
    box-shadow: none;
  }
`;

export const CommonCardsContainer = styled.div`
  // display: ${(props) => (props.flexDisplay ? "flex" : "block")};
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  @media screen and (max-width: 1190px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  @media screen and (max-width: 686px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledH3 = styled.h3`
  margin-left: 9px;
`;

export const DynamicStyledH3 = styled(StyledH3)`
  margin-left: ${(props) => (props.arrowVisible ? "51px" : "9")};
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 80%;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  @media screen and (max-width: 604px) {
    width: 100%;
    min-width: 100%;
  }
  @media screen and (max-width: 429px) {
    width: 100%;
    min-width: 92%;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledP = styled.p`
  margin-right: 14px;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: rgb(255, 66, 105);
  cursor: pointer;
`;

export const ArrowImg = styled.img`
  padding: 10px;
  cursor: pointer;
  @media screen and (max-width: 686px) {
    margin-top: 10px; // Ajoute un peu d'espace entre la flèche et les cartes
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 686px) {
    flex-direction: column-reverse; // Change la direction de flex à la colonne en inversant l'ordre
  }
`;

export const Placeholder = styled.div`
  width= 20px; 
  height= 28px;
  flex-shrink: 0;
`;

export const ArrowImgLargeScreen = styled.img`
  padding: 10px;
  cursor: pointer;

  @media screen and (max-width: 686px) {
    display: none; // Cache les flèches sur les petits écrans
  }
`;

export const ArrowImgSmallScreen = styled.img`
  display: none; // Cache par défaut les flèches sur les grands écrans
  padding: 10px;
  cursor: pointer;

  @media screen and (max-width: 686px) {
    display: inline-block; // Montre les flèches sur les petits écrans
    margin-top: 10px; // Ajoute un peu d'espace entre la flèche et les cartes
  }
`;

export const ArrowContainer = styled.div`
  display: none; // Cache par défaut le conteneur de flèches

  @media screen and (max-width: 686px) {
    display: flex; // Montre le conteneur de flèches sur les petits écrans
    justify-content: center;
    margin-top: 10px;
  }
`;

export const ArrowLeftSmallScreen = styled(ArrowImgSmallScreen)`
  @media screen and (max-width: 686px) {
    margin-right: 20px; // Ajoute une marge à droite de la flèche gauche
  }
`;

export const ArrowRightSmallScreen = styled(ArrowImgSmallScreen)`
  @media screen and (max-width: 686px) {
    margin-right: 20px; // Ajoute une marge à droite de la flèche gauche
  }
`;
