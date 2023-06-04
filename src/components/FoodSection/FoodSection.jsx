import { foodData } from "../../datas/foodData";
import {
  CommonSection,
  CommonCardsContainer,
  StyledH3,
} from "../../assets/Styles/CommonStyles";
import FoodCard from "../FoodCard/FoodCard";
import NewsSection from "../NewsSection/NewsSection";

export const FoodSection = () => {
  return (
    <div>
      <CommonSection>
        <StyledH3>Top recettes</StyledH3>
        <CommonCardsContainer>
          {foodData.map((food, index) => (
            <FoodCard key={index} image={food.image} title={food.title} />
          ))}
        </CommonCardsContainer>
      </CommonSection>
      <NewsSection />
    </div>
  );
};

export default FoodSection;
