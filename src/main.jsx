import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import rootReducer from "./store/reducers/rootReducer";
import App from "./App.jsx";
import { setRecipes, setSavedRecipes } from "./store/actions/recipeActions";
import recipesData from "./datas/data.json";

const store = configureStore({
  reducer: rootReducer,
});

// Charger les données dans le store Redux
store.dispatch(setRecipes(recipesData));

// Charger les recettes sauvegardées du localStorage
const savedRecipesFromStorage = localStorage.getItem("savedRecipes");
if (savedRecipesFromStorage) {
  try {
    const parsedRecipes = JSON.parse(savedRecipesFromStorage);
    // Utiliser l'action Redux pour stocker les recettes
    store.dispatch(setSavedRecipes(parsedRecipes));
  } catch (error) {
    console.log("Erreur lors de la lecture de localStorage:", error);
  }
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
