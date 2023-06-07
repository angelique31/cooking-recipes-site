import { recipeData } from "../../datas/recipeData.js";
import Section from "../Section/Section.jsx";

const RecipeSection = () => {
  return <Section data={recipeData} title="Recettes" linkTo="/recipe" />;
};

export default RecipeSection;
