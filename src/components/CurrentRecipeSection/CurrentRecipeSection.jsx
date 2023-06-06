import { currentNewsData } from "../../datas/currentRecipeData.js";
import CardSection from "../CardSection/CardSection.jsx";

const CurrentRecipeSection = () => {
  return <CardSection data={currentNewsData} title="En ce moment" linkTo="#" />;
};

export default CurrentRecipeSection;
