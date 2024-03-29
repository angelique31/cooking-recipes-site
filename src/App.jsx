import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GlobalStyles from "./assets/Styles/GlobalStyle";
import NewsDetails from "./components/NewsDetails/NewsDetails";
import RecipeJsonDetails from "./components/RecipeJsonDetails/RecipeJsonDetails";
import FilteredRecipesPage from "./pages/FilteredRecipesPage/FilteredRecipesPage";
import SavedRecipesPage from "./pages/SavedRecipesPage/SavedRecipesPage";
import NotFoundPage from "./pages/NotFounfPage/NotFoundPage";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/category/:categoryName"
            element={<FilteredRecipesPage />}
          />

          <Route
            path="/current-news/:recipeId"
            element={<RecipeJsonDetails recipeType="currentNews" />}
          />
          <Route
            path="/top-food/:recipeId"
            element={<RecipeJsonDetails recipeType="topFood" />}
          />
          <Route path="/news/:newsId" element={<NewsDetails />} />
          <Route
            path="/recipes/:recipeId"
            element={<RecipeJsonDetails recipeType="regularRecipes" />}
          />
          <Route
            path="/recipe-detail/:recipeId"
            element={<RecipeJsonDetails recipeType="regularRecipes" />}
          />
          <Route
            path="/special-recipes/:recipeId"
            element={<RecipeJsonDetails recipeType="antiWasteTipsData" />}
          />
          <Route path="/filtered-recipes" element={<FilteredRecipesPage />} />
          <Route path="/mes-recettes" element={<SavedRecipesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
