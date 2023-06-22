import { useSelector } from "react-redux";

const CategoriesRecipesList = ({ category }) => {
  // Récupérer les données des recettes à partir du store Redux
  const recipesData = useSelector((state) => state.recipes.recipeData);
  // S'assurer que recipesData.regularRecipes existe avant de l'utiliser
  if (!recipesData || !recipesData.regularRecipes) {
    return <div>Chargement...</div>;
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

export default CategoriesRecipesList;
