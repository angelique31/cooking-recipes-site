import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import rootReducer from "./store/reducers/rootReducer";
import App from "./App.jsx";
import { setRecipes } from "./store/actions/recipeActions";
import recipesData from "./datas/data.json";

const store = configureStore({
  reducer: rootReducer,
});

// Charger les données dans le store Redux
store.dispatch(setRecipes(recipesData));

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
