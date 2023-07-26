import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSavedRecipe,
  toggleSavedStatus,
} from "../../store/actions/recipeActions";

import heartIcon from "../../assets/Icons/heartIcon.svg";

import { MyRecipesButton } from "../RecipeButton/RecipeButton.styled";

/**
 * Component that provides the functionality to save a recipe.
 *
 * It allows a user to save a recipe to their personal recipe collection.
 * It maintains a local state to check whether the recipe is saved or not.
 * When the component mounts, it checks if the recipe is already saved and updates the local state accordingly.
 * On clicking the button, it dispatches actions to save the recipe to the Redux store and also stores it to the local storage.
 *
 * @component
 * @param {Object} props - Properties passed to the component
 * @param {Object} props.recipe - The recipe to be saved
 * @param {string} props.recipeType - The type of recipe (e.g. 'current', 'top-food', 'news', etc.)
 *
 * @returns {JSX.Element} A button component that saves the recipe on click and shows the saved status of the recipe
 */
const RecipeButton = ({ recipe, recipeType }) => {
  const dispatch = useDispatch();
  const savedRecipes = useSelector((state) => state.recipes.savedRecipes);

  // Utiliser l'état local pour savoir si la recette est sauvegardée
  const [isSaved, setIsSaved] = useState(false);

  // Vérifier si la recette est déjà sauvegardée lorsque le composant est monté
  useEffect(() => {
    const isRecipeSaved = savedRecipes.some(
      (savedRecipe) =>
        savedRecipe.recipe.id === recipe.id && savedRecipe.isSaved
    );
    setIsSaved(isRecipeSaved);
  }, [savedRecipes, recipe.id]);

  const handleSaveRecipe = () => {
    // Si la recette n'est pas déjà enregistrée, ajoutez-la
    if (!isSaved) {
      dispatch(addSavedRecipe(recipe, recipeType));
      setIsSaved(true); // Mettre à jour l'état à vrai après avoir sauvegardé la recette
      dispatch(toggleSavedStatus(recipe.id, true)); // Mettre à jour l'état sauvegardé dans Redux
      // Stocker la recette dans localStorage
      try {
        const newSavedRecipes = [
          ...savedRecipes,
          { recipe, recipeType, isSaved: true },
        ];
        localStorage.setItem("savedRecipes", JSON.stringify(newSavedRecipes));
      } catch (error) {
        console.log(
          "Erreur lors de l'enregistrement dans localStorage:",
          error
        );
      }
    } else {
      console.log("Recipe already saved.");
    }
  };

  return (
    <div>
      <MyRecipesButton type="submit" onClick={handleSaveRecipe}>
        <img src={heartIcon} alt="heart" />
        {isSaved ? "Sauvegardée" : "Mon carnet"}
      </MyRecipesButton>
    </div>
  );
};

RecipeButton.propTypes = {
  recipe: PropTypes.object.isRequired,
  recipeType: PropTypes.string.isRequired,
};
export default RecipeButton;
