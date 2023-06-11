import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GlobalStyles from "./assets/Styles/GlobalStyle";
import NewsDetails from "./components/NewsDetails/NewsDetails";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import RecipeJsonDetails from "./components/RecipeJsonDetails/RecipeJsonDetails";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/:newsId" element={<NewsDetails />} />
          <Route path="/recipes/:recipeId" element={<RecipeJsonDetails />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
