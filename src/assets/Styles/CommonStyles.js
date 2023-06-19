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
  @media screen and (max-width: 686px) {
    margin: auto;
    width: 100%;
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
