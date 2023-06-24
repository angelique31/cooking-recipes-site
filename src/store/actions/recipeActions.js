export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_RECIPES = "SET_RECIPES";
export const ADD_SAVED_RECIPE = "ADD_SAVED_RECIPE";

export const setSearchValue = (value) => {
  return {
    type: SET_SEARCH_VALUE,
    payload: value,
  };
};

export const setRecipes = (recipes) => {
  return {
    type: SET_RECIPES,
    payload: recipes,
  };
};

export const addSavedRecipe = (recipe, recipeType) => {
  return {
    type: ADD_SAVED_RECIPE,
    payload: {
      recipe,
      recipeType,
    },
  };
};
