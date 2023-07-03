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

export const ArrowRightContainer = styled.div`
  @media screen and (max-width: 686px) {
    display: block;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

export const ArrowLeftContainer = styled.div`
  @media screen and (max-width: 686px) {
    display: block;
    position: absolute;
    left: 15px; // Utilisez "left" pour positionner la flèche de gauche
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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

export const Placeholder = styled.div`
  width= 20px; 
  height= 28px;
  flex-shrink: 0;
`;
