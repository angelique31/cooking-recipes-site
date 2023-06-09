import RecipeArticle from "../RecipeArticle/RecipeArticle";
import { currentNewsData } from "../../datas/currentRecipeData.js";
import { foodData } from "../../datas/foodData.js";
import { newsData } from "../../datas/newsData.js";
import { recipeData } from "../../datas/recipeData.js";
import { antiWasteTipsData } from "../../datas/antiWasteTipsData";
/**
 * Composant qui affiche plusieurs composants RecipeArticle avec
 * différents ensembles de données, titres et liens.
 *
 * Il utilise des données provenant de currentNewsData, foodData, et newsData, et passe ces données avec
 * des titres et des liens en tant que props aux composants RecipeArticle.
 *
 * @returns {JSX.Element} Un élément conteneur contenant plusieurs composants RecipeArticle.
 */
const RecipeArticleContainer = () => {
  return (
    <div>
      <RecipeArticle data={currentNewsData} title="En ce moment" linkTo="#" />
      <RecipeArticle data={foodData} title="Top recettes" linkTo="#" />
      <RecipeArticle
        data={newsData}
        title="Dernières actualités"
        linkTo="/news"
      />
      <RecipeArticle data={recipeData} title="Recettes" linkTo="/recipe" />
      <RecipeArticle
        data={antiWasteTipsData}
        title="Astuces anti-gaspi"
        linkTo="/recipe"
      />
    </div>
  );
};

export default RecipeArticleContainer;
