export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_RECIPES = "SET_RECIPES";
export const ADD_SAVED_RECIPE = "ADD_SAVED_RECIPE";
export const SET_SAVED_RECIPES = "SET_SAVED_RECIPES";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const TOGGLE_SAVED_STATUS = "TOGGLE_SAVED_STATUS";
export const SET_NUMBER_OF_PEOPLE = "SET_NUMBER_OF_PEOPLE";

//gestion du défilement des cartes avec le doigt :
export const INCREMENT_CURRENT_INDEX = "INCREMENT_CURRENT_INDEX";
export const DECREMENT_CURRENT_INDEX = "DECREMENT_CURRENT_INDEX";

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

export const setSavedRecipes = (savedRecipes) => {
  return {
    type: SET_SAVED_RECIPES,
    payload: savedRecipes,
  };
};

export const deleteRecipe = (id) => {
  return {
    type: DELETE_RECIPE,
    payload: id,
  };
};

export const toggleSavedStatus = (recipeId, isSaved) => {
  return {
    type: TOGGLE_SAVED_STATUS,
    payload: {
      recipeId,
      isSaved,
    },
  };
};

export const setNumberOfPeople = (number) => {
  return {
    type: SET_NUMBER_OF_PEOPLE,
    payload: number,
  };
};

//gestion du défilement des cartes avec le doigt :
export const incrementCurrentIndex = () => {
  return {
    type: INCREMENT_CURRENT_INDEX,
  };
};

export const decrementCurrentIndex = () => {
  return {
    type: DECREMENT_CURRENT_INDEX,
  };
};
