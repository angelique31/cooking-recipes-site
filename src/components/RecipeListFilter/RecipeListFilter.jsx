import { useSelector } from "react-redux";

const normalizeString = (input) => {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "") // supprime les espaces en double
    .trim(); // supprime les espaces en début et fin de chaîne
};

const RecipeListFilter = () => {
  const searchValue = useSelector((state) => state.recipes.searchValue);
  // const recipes = useSelector((state) => state.recipes.recipes.regularRecipes);
  const recipes = useSelector(
    (state) => state.recipes.recipeData.regularRecipes
  );

  if (!recipes) {
    return [];
  }

  let initialLimit = 3;
  if (searchValue) {
    // Si une recherche est effectuée, nous n'avons pas besoin de limiter les résultats
    initialLimit = recipes.length;
  }

  const normalizedSearchValue = normalizeString(searchValue);
  return recipes
    .filter((recipe) => {
      if (!searchValue) {
        return true;
      }

      const ingredients = recipe.ingredients
        ? recipe.ingredients
            .map((ingredient) => normalizeString(ingredient.name))
            .join(" ")
        : "";

      const normalizedRecipeName = normalizeString(recipe.name);

      return (
        normalizedRecipeName.includes(normalizedSearchValue) ||
        ingredients.includes(normalizedSearchValue)
      );
    })
    .slice(0, initialLimit);
};

export default RecipeListFilter;
