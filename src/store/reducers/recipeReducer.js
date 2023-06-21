import { SET_SEARCH_VALUE, SET_RECIPES } from "../actions/recipeActions";

export const RESET_SEARCH_VALUE = "RESET_SEARCH_VALUE";

const initialState = {
  searchValue: "",
  recipeData: [],
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
    default:
      return state;
  }
};

export default recipeReducer;
