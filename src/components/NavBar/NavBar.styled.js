import styled from "styled-components";

// export const NavBarContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: 100;
// `;
import DivWithFilteredProps from "../DivWithFilteredProps";

export const NavBarContainer = styled(DivWithFilteredProps)`
  ${(props) =>
    props.isRecipePage
      ? `
        /* Styles quand isRecipePage est vrai */
        background-image: none;
        display: flex;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
        background-color: #fff;
        border-bottom: 1px solid #e9ecef;
        box-shadow: 0 1px 1px 0 #e9ecef;
        
      `
      : `
        /* Styles par défaut */
       
      `}
`;
export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: ${(props) => (props.isRecipePage ? "0 50px" : "50px")};
  // background-image: url("/assets/navBarRecipe.jpg");
  background-image: ${(props) =>
    props.isRecipePage ? "none" : 'url("/assets/navBarRecipe2.jpg")'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) =>
    props.isRecipePage &&
    `
      flex-grow: 1;
    `}

  .navBarContent {
    display: flex;
    gap: 50px;
    width: 70%;
    background-color: white;
    align-items: center;
    opacity: 0.9;
    margin: auto;
    padding: ${(props) => (props.isRecipePage ? "0 50px" : "50px")};
    border-radius: 10px;
    ${(props) =>
      props.isRecipePage &&
      `
        width: 100%;
       
      `}
  }
`;
