import { useDispatch, useSelector } from "react-redux";
import { addSavedRecipe } from "../../store/actions/recipeActions";
import { ModifiedButton } from "./RecipeButton.styled.js";
import heartIcon from "../../assets/Icons/heartIcon.svg";

const RecipeButton = ({ recipe, recipeType }) => {
  const dispatch = useDispatch();
  const savedRecipes = useSelector((state) => state.recipes.savedRecipes); // accéder aux recettes enregistrées

  const handleSaveRecipe = () => {
    // Vérifier si la recette existe déjà dans les recettes enregistrées
    const isRecipeSaved = savedRecipes.some(
      (savedRecipe) => savedRecipe.recipe.id === recipe.id
    );
    // Si la recette n'est pas déjà enregistrée, ajoutez-la
    if (!isRecipeSaved) {
      dispatch(addSavedRecipe(recipe, recipeType));
      // Enregistrer dans localStorage
      try {
        const newSavedRecipes = [...savedRecipes, { recipe, recipeType }];
        localStorage.setItem("savedRecipes", JSON.stringify(newSavedRecipes));
      } catch (error) {
        // Gérer les erreurs qui pourraient survenir avec localStorage
        console.log(
          "Erreur lors de l'enregistrement dans localStorage:",
          error
        );
        // Vous pouvez également afficher un message à l'utilisateur ici
      }
    } else {
      // Vous pouvez afficher un message indiquant que la recette est déjà enregistrée,
      // ou gérer cette situation comme vous le souhaitez.
      console.log("Recipe already saved.");
    }
  };

  return (
    <div>
      <ModifiedButton type="submit" onClick={handleSaveRecipe}>
        <img src={heartIcon} alt="heart" />
        Mon carnet
      </ModifiedButton>
    </div>
  );
};
export default RecipeButton;
