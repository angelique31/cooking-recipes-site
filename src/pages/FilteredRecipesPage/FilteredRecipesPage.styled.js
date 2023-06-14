// FilteredRecipesPage.styled.js
import styled from "styled-components";

export const RecipesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cartes par ligne */
  gap: 20px; /* Espacement entre les cartes */
  justify-items: center; /* Centrer les cartes horizontalement */
`;

export const Subheading = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.36;
`;

export const RecipeCount = styled.p`
  color: rgb(153, 139, 137);
  font-size: 1rem;
`;
