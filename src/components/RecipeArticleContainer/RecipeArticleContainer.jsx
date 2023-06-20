import RecipeArticle from "../RecipeArticle/RecipeArticle";
import RecipeListFilter from "../RecipeListFilter/RecipeListFilter";
import { currentNewsData } from "../../datas/currentRecipeData.js";
import { foodData } from "../../datas/foodData.js";
import { newsData } from "../../datas/newsData.js";
import { antiWasteTipsData } from "../../datas/antiWasteTipsData";

const RecipeArticleContainer = () => {
  const filteredRecipes = RecipeListFilter();

  let flexDisplay = true;
  if (filteredRecipes.length > 3) {
    flexDisplay = false;
  }

  return (
    <div>
      <RecipeArticle
        data={currentNewsData}
        name="En ce moment"
        linkTo="/current-news"
        showTitle={true}
      />
      <RecipeArticle
        data={foodData}
        name="Top recettes"
        linkTo="/top-food"
        showTitle={true}
      />
      <RecipeArticle
        data={newsData}
        name="Dernières actualités"
        linkTo="/news"
        showTitle={true}
      />

      <RecipeArticle
        data={filteredRecipes}
        name="Recettes"
        linkTo="/recipes"
        flexDisplay={flexDisplay}
        showTitle={true}
      />

      <RecipeArticle
        data={antiWasteTipsData}
        name="Astuces anti-gaspi"
        linkTo="/special-recipes"
        showTitle={true}
      />
    </div>
  );
};

export default RecipeArticleContainer;
