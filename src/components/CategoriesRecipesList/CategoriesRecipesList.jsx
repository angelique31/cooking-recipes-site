import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import LoaderComponent from "../LoaderComponent/LoaderComponent";

/**
 * Renders a list of recipes filtered by category
 *
 * @component
 * @param {string} category - The category to filter recipes
 * @returns {JSX.Element} Rendered CategoriesRecipesList component
 */
const CategoriesRecipesList = ({ category }) => {
  // Récupérer les données des recettes à partir du store Redux
  const recipesData = useSelector((state) => state.recipes.recipeData);
  // S'assurer que recipesData.regularRecipes existe avant de l'utiliser
  if (!recipesData || !recipesData.regularRecipes) {
    // return <div>Chargement...</div>;
    return <LoaderComponent />;
  }

  // Filtrer les recettes par catégorie, seulement si recipesData existe
  const filteredRecipes = recipesData
    ? recipesData.filter((recipe) => recipe.category.includes(category))
    : [];

  return (
    <ul>
      {filteredRecipes.map((recipe) => (
        <li key={recipe.id}>{recipe.name}</li>
      ))}
    </ul>
  );
};

CategoriesRecipesList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoriesRecipesList;
