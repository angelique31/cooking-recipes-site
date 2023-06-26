// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addSavedRecipe } from "../../store/actions/recipeActions";
// import { ModifiedButton } from "./RecipeButton.styled.js";
// import heartIcon from "../../assets/Icons/heartIcon.svg";

// const RecipeButton = ({ recipe, recipeType }) => {
//   const dispatch = useDispatch();
//   const savedRecipes = useSelector((state) => state.recipes.savedRecipes);

//   // Utiliser l'état local pour savoir si la recette est sauvegardée
//   const [isSaved, setIsSaved] = useState(false);

//   // Vérifier si la recette est déjà sauvegardée lorsque le composant est monté
//   useEffect(() => {
//     const isRecipeSaved = savedRecipes.some(
//       (savedRecipe) => savedRecipe.recipe.id === recipe.id
//     );
//     setIsSaved(isRecipeSaved);
//   }, [savedRecipes, recipe.id]);

//   const handleSaveRecipe = () => {
//     // Si la recette n'est pas déjà enregistrée, ajoutez-la
//     if (!isSaved) {
//       dispatch(addSavedRecipe(recipe, recipeType));
//       setIsSaved(true); // Mettre à jour l'état à vrai après avoir sauvegardé la recette
//       try {
//         const newSavedRecipes = [...savedRecipes, { recipe, recipeType }];
//         localStorage.setItem("savedRecipes", JSON.stringify(newSavedRecipes));
//       } catch (error) {
//         console.log(
//           "Erreur lors de l'enregistrement dans localStorage:",
//           error
//         );
//       }
//     } else {
//       console.log("Recipe already saved.");
//     }
//   };

//   return (
//     <div>
//       <ModifiedButton type="submit" onClick={handleSaveRecipe}>
//         <img src={heartIcon} alt="heart" />
//         {isSaved ? "Sauvegardée" : "Mon carnet"}
//       </ModifiedButton>
//     </div>
//   );
// };

// export default RecipeButton;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSavedRecipe,
  toggleSavedStatus,
} from "../../store/actions/recipeActions";
import { ModifiedButton } from "./RecipeButton.styled.js";
import heartIcon from "../../assets/Icons/heartIcon.svg";

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
      <ModifiedButton type="submit" onClick={handleSaveRecipe}>
        <img src={heartIcon} alt="heart" />
        {isSaved ? "Sauvegardée" : "Mon carnet"}
      </ModifiedButton>
    </div>
  );
};

export default RecipeButton;
