import {
  SET_SEARCH_VALUE,
  SET_RECIPES,
  ADD_SAVED_RECIPE,
} from "../actions/recipeActions";

export const RESET_SEARCH_VALUE = "RESET_SEARCH_VALUE";

const initialState = {
  searchValue: "",
  recipeData: [],
  savedRecipes: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case SET_RECIPES:
      return {
        ...state,
        recipeData: action.payload,
      };
    case RESET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: "", // Réinitialisez la valeur de recherche
      };
    case ADD_SAVED_RECIPE:
      // return {
      //   ...state,
      //   savedRecipes: [...state.savedRecipes, action.payload],
      // };
      return {
        ...state,
        savedRecipes: [
          ...state.savedRecipes,
          {
            recipe: action.payload.recipe,
            recipeType: action.payload.recipeType,
          },
        ],
      };
    default:
      return state;
  }
};

export default recipeReducer;
