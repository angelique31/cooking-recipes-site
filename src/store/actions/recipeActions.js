export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_RECIPES = "SET_RECIPES";

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
