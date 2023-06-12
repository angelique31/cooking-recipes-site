import { useSelector } from "react-redux";

const normalizeString = (input) => {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ") // supprime les espaces en double
    .trim(); // supprime les espaces en début et fin de chaîne
};

// const RecipeListFilter = () => {
//   const searchValue = useSelector((state) => state.recipes.searchValue);
//   const recipes = useSelector((state) => state.recipes.recipes);

//   if (!recipes) {
//     return [];
//   }

//   let initialLimit = 3;
//   if (searchValue) {
//     // Si une recherche est effectuée, nous n'avons pas besoin de limiter les résultats
//     initialLimit = recipes.length;
//   }

//   const normalizedSearchValue = normalizeString(searchValue);
//   return recipes
//     .filter((recipe) => {
//       if (!searchValue) {
//         return true;
//       }

//       const ingredients = recipe.ingredients
//         .map((ingredient) => normalizeString(ingredient.name))
//         .join(" ");

//       const normalizedRecipeName = normalizeString(recipe.name);

//       return (
//         // recipe.name.toLowerCase().includes(searchValue.toLowerCase()) ||
//         // ingredients.toLowerCase().includes(searchValue.toLowerCase())
//         normalizedRecipeName.includes(normalizedSearchValue) ||
//         ingredients.includes(normalizedSearchValue)
//       );
//     })
//     .slice(0, initialLimit);
// };

const RecipeListFilter = () => {
  const searchValue = useSelector((state) => state.recipes.searchValue);
  const recipes = useSelector((state) => state.recipes.recipes);

  if (!recipes) {
    return [];
  }

  let initialLimit = 3;
  if (searchValue) {
    initialLimit = recipes.length;
  }

  const normalizedSearchValue = normalizeString(searchValue);
  const searchWords = normalizedSearchValue.split(" ");

  return recipes
    .filter((recipe) => {
      if (!searchValue) {
        return true;
      }
      const ingredients = recipe.ingredients
        .map((ingredient) => normalizeString(ingredient.name))
        .join(" ");

      const normalizedRecipeName = normalizeString(recipe.name);

      // Vérifie si l'ensemble de la chaîne de recherche est présent
      const fullMatch =
        normalizedRecipeName.includes(normalizedSearchValue) ||
        ingredients.includes(normalizedSearchValue);

      // Si un match complet est trouvé, retourner true
      if (fullMatch) {
        return true;
      }

      return searchWords.every(
        (word) =>
          normalizedRecipeName.includes(word) || ingredients.includes(word)
      );
      // const ingredientsSet = new Set(
      //   recipe.ingredients
      //     .map((ingredient) => normalizeString(ingredient.name))
      //     .join(" ")
      //     .split(" ")
      // );

      // const recipeNameSet = new Set(normalizeString(recipe.name).split(" "));

      // return (
      //   recipeNameSet.has(normalizedSearchValue) ||
      //   ingredientsSet.has(normalizedSearchValue)
      // );
    })
    .slice(0, initialLimit);
};

export default RecipeListFilter;
