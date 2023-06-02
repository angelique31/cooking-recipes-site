import Carousel from "../../components/Carousel/Carousel";
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
    </div>
  );
};

export default HomePage;
