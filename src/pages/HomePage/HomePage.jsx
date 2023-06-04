import Carousel from "../../components/Carousel/Carousel";
import FoodSection from "../../components/FoodSection/FoodSection";
import NavBar from "../../components/NavBar/NavBar";

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
    </div>
  );
};

export default HomePage;
