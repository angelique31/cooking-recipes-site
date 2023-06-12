import { SET_SEARCH_VALUE, SET_RECIPES } from "../actions/recipeActions";

const initialState = {
  searchValue: "",
  recipes: [],
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
        recipes: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
