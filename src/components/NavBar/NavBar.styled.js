import styled from "styled-components";

// export const NavBarContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: 100;
// `;

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 50px;
  // background-image: url("/assets/navBarRecipe.jpg");
  background-image: url("/assets/navBarRecipe2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .navBarContent {
    display: flex;
    gap: 50px;
    width: 70%;
    background-color: white;
    align-items: center;
    opacity: 0.9;
    margin: auto;
    padding: 50px;
    border-radius: 10px;
  }
`;
