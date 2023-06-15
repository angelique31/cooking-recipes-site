import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { recipeData } from "../../datas/recipeData.js";
// import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";
import {
  StyledH1,
  StyledH2,
  ContentWrapper,
  StyledImage,
  ImageTextWrapper,
  DetailText,
  ContentSection,
} from "./RecipeDetails.styled.js";
import RecipeButton from "../RecipeButton/RecipeButton.jsx";
import CounterButton from "../CounterButton/CounterButton.jsx";
import RecipeInfoBox from "../RecipeInfoBox/RecipeInfoBox.jsx";

/**
 * Affiche les détails d'une recette spécifique.
 *
 * Utilise l'ID de la recette fourni dans l'URL pour rechercher
 * et afficher les informations pertinentes de la recette correspondante.
 *
 * @returns {JSX.Element} Un élément JSX contenant les détails de la recette sélectionnée.
 */
const RecipeDetails = () => {
  const { recipeId } = useParams(); // Cela récupère l'id de la recette à partir de l'URL
  const recipe = recipeData.find((item) => item.id === recipeId);

  // pour forcer le défilement en haut de la page lorsque le composant est monté.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!recipe) {
    return <h2>Recette non trouvée</h2>;
  }

  return (
    <div>
      <NavBar />
      <StyledH1>{recipe.name}</StyledH1>
      <ContentWrapper>
        <ImageTextWrapper>
          <StyledImage src={recipe.image} alt={recipe.title} />
          <DetailText>{recipe.detailText}</DetailText>
        </ImageTextWrapper>
        <ContentSection>
          <RecipeInfoBox
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
          />
          <RecipeButton />
          {/* <StyledH2>Ingrédients</StyledH2> */}
          <CounterButton />
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <StyledH2>Préparation</StyledH2>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>
                <strong> {index + 1}. </strong>
                {instruction}
              </li>
            ))}
          </ol>
        </ContentSection>
      </ContentWrapper>
    </div>
  );
};

export default RecipeDetails;
