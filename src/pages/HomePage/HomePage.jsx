import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import RecipeArticleContainer from "../../components/RecipeArticleContainer/RecipeArticleContainer";
import CategoryCard from "../../components/RecipeCategoryMenu/CategoryCard/CategoryCard";

import { HomePageWrapper } from "./HomePage.styled";

const HomePage = () => {
  return (
    <div>
      <HomePageWrapper>
        <NavBar showSearchBar={true} /> {/* Activer la barre de recherche */}
        <CategoryCard />
      </HomePageWrapper>
      <RecipeArticleContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
