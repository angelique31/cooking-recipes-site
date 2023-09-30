import { useSelector } from "react-redux";

const normalizeString = (input) => {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ") // remplace les espaces multiples par un seul espace
    .trim(); // supprime les espaces en début et fin de chaîne
};

const RecipeListFilter = () => {
  const searchValue = useSelector((state) => state.recipes.searchValue);
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

  const normalizedSearchValues = normalizeString(searchValue).split(" ");
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

      // Check if every word in the searchValue exists in the recipe name or ingredients
      return normalizedSearchValues.every(
        (value) =>
          normalizedRecipeName.includes(value) || ingredients.includes(value)
      );
    })
    .slice(0, initialLimit);
};

export default RecipeListFilter;
