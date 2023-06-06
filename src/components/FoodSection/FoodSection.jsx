import { foodData } from "../../datas/foodData.js";
import CardSection from "../CardSection/CardSection.jsx";

const FoodSection = () => {
  return <CardSection data={foodData} title="Top recettes" linkTo="#" />;
};

export default FoodSection;
