import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../../datas/data.json";
import NavBar from "../NavBar/NavBar.jsx";
import {
  StyledH1,
  StyledH2,
  ContentWrapper,
  StyledImage,
  ImageTextWrapper,
  //   DetailText,
  ContentSection,
} from "../RecipeDetails/RecipeDetails.styled";
import RecipeButton from "../RecipeButton/RecipeButton.jsx";
import CounterButton from "../CounterButton/CounterButton.jsx";
import RecipeInfoBox from "../RecipeInfoBox/RecipeInfoBox.jsx";

const RecipeJsonDetails = () => {
  const { recipeId } = useParams();
  console.log(recipesData);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Trouver la recette dans les données importées
    const foundRecipe = recipesData.find((item) => item.id === recipeId);
    console.log(foundRecipe);
    setRecipe(foundRecipe);

    // Pour forcer le défilement en haut de la page
    window.scrollTo(0, 0);
  }, [recipeId]);

  if (!recipe) {
    return <h2>Recette non trouvée</h2>;
  }

  return (
    <div>
      <NavBar />
      <StyledH1>{recipe.name}</StyledH1>
      <ContentWrapper>
        <ImageTextWrapper>
          <StyledImage src={recipe.image} alt={recipe.name} />
        </ImageTextWrapper>
        <ContentSection>
          <RecipeInfoBox
            prepTime={recipe.preparationTime}
            cookTime={recipe.cookTime}
          />
          <RecipeButton />
          <StyledH2>Ingrédients</StyledH2>
          <CounterButton />
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name} - {ingredient.quantity}
              </li>
            ))}
          </ul>
          <StyledH2>Préparation</StyledH2>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>
                <strong> {index + 1}. </strong>
                {step}
              </li>
            ))}
          </ol>
        </ContentSection>
      </ContentWrapper>
    </div>
  );
};

export default RecipeJsonDetails;
