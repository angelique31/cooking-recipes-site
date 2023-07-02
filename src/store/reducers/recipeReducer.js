import {
  SET_SEARCH_VALUE,
  SET_RECIPES,
  ADD_SAVED_RECIPE,
  SET_SAVED_RECIPES,
  DELETE_RECIPE,
  TOGGLE_SAVED_STATUS,
  SET_NUMBER_OF_PEOPLE,
} from "../actions/recipeActions";

export const RESET_SEARCH_VALUE = "RESET_SEARCH_VALUE";

const initialState = {
  searchValue: "",
  recipeData: [],
  savedRecipes: [],
  numberOfPeople: 1, //l'état initial du nombre de personnes.
  // currentIndex: 0,
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
    case TOGGLE_SAVED_STATUS:
      return {
        ...state,
        savedRecipes: state.savedRecipes.map((recipe) =>
          recipe.recipe.id === action.payload.recipeId
            ? { ...recipe, isSaved: action.payload.isSaved }
            : recipe
        ),
      };
    case SET_SAVED_RECIPES:
      return {
        ...state,
        savedRecipes: action.payload,
      };
    case DELETE_RECIPE:
      return {
        ...state,
        savedRecipes: state.savedRecipes.filter(
          (savedRecipe) => savedRecipe.recipe.id !== action.payload
        ),
      };
    case SET_NUMBER_OF_PEOPLE:
      return {
        ...state,
        numberOfPeople: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
