import styled, { keyframes } from "styled-components";

export const RecipesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 auto;
  max-width: 1200px;
  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 896px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledH2 = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.36;
`;

export const RecipeCount = styled.p`
  color: rgb(153, 139, 137);
  font-size: 1rem;
`;

export const StyledH3 = styled.h3`
  margin-bottom: 5px;
  color: rgb(63, 55, 53);
  font-weight: 600;
  margin-left: 16px;
`;

export const HeadingWrapper = styled.div`
  margin-left: 16px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const AnimatedH2 = styled.h2`
  animation: 2s ${fadeIn} ease-out;
  text-align: center;
`;
