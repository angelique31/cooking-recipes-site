import AntiWasteTips from "../../components/AntiWasteTips/AntiWasteTips";
import Carousel from "../../components/Carousel/Carousel";
import CurrentRecipeSection from "../../components/CurrentRecipeSection/CurrentRecipeSection";
import FoodSection from "../../components/FoodSection/FoodSection";
import NavBar from "../../components/NavBar/NavBar";
import NewsSection from "../../components/NewsSection/NewsSection";

import CategoryCard from "../../components/RecipeCategoryMenu/CategoryCard/CategoryCard";
import { HomePageWrapper } from "./HomePage.styled";

const HomePage = () => {
  return (
    <div>
      <HomePageWrapper>
        <NavBar />
        <CategoryCard />
      </HomePageWrapper>
      <Carousel />
      <FoodSection />
      <NewsSection />
      <CurrentRecipeSection />
      <AntiWasteTips />
    </div>
  );
};

export default HomePage;
