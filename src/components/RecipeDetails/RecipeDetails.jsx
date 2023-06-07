import { useParams } from "react-router-dom";
import { recipeData } from "../../datas/recipeData.js";
import NavBar from "../NavBar/NavBar.jsx";
import cookingIcon from "../../assets/Icons/cookingIcon.svg";
import timerIcon from "../../assets/Icons/timerIcon.svg";
import {
  StyledH1,
  StyledImage,
  StyledDiv,
  StyledP,
} from "./RecipeDetails.styled.js";
import RecipeButton from "../RecipeButton/RecipeButton.jsx";

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Cela récupère l'id de la recette à partir de l'URL
  const recipe = recipeData.find((item, index) => index === parseInt(recipeId));

  if (!recipe) {
    return <h2>Recette non trouvée</h2>;
  }

  return (
    <div>
      <NavBar />
      <StyledH1>{recipe.title}</StyledH1>
      <StyledImage src={recipe.image} alt={recipe.title} />

      <p>{recipe.detailText}</p>
      <div>
        <StyledDiv>
          <StyledP>Portions : {recipe.servings} de sirop</StyledP>
          <StyledP>
            <img src={timerIcon} alt="Timer icon" />
            Préparation : {recipe.prepTime}
          </StyledP>
          <StyledP>
            <img src={cookingIcon} alt="Cooking icon" />
            Cuisson : {recipe.cookTime}
          </StyledP>
        </StyledDiv>
        <RecipeButton />
        <h2>Ingrédients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Instructions</h2>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetails;
