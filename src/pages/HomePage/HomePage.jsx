import NavBar from "../../components/NavBar/NavBar";
import CategoryCard from "../../components/RecipeCategoryMenu/CategoryCard/CategoryCard";
import { HomePageWrapper } from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <NavBar />
      <CategoryCard />
    </HomePageWrapper>
  );
};

export default HomePage;
