import RecipeArticle from "../RecipeArticle/RecipeArticle";
import RecipeListFilter from "../RecipeListFilter/RecipeListFilter";
import { useSelector } from "react-redux";

const RecipeArticleContainer = () => {
  // const recipesData = useSelector((state) => state.regularRecipes);
  const recipesData = useSelector((state) => state.recipes.recipeData);

  const filteredRecipes = RecipeListFilter(recipesData);

  let flexDisplay = true;
  if (filteredRecipes.length > 3) {
    flexDisplay = false;
  }

  return (
    <div>
      <RecipeArticle
        data={recipesData.currentRecipeData}
        name="En ce moment"
        linkTo="/current-news"
        section="current-news"
        showTitle={true}
      />
      <RecipeArticle
        data={recipesData.topFoodData}
        name="Top recettes"
        linkTo="/top-food"
        section="top-food"
        showTitle={true}
      />
      <RecipeArticle
        data={recipesData.newsData}
        name="Dernières actualités"
        linkTo="/news"
        showTitle={true}
        enableCarousel={true}
      />

      <RecipeArticle
        data={filteredRecipes}
        name="Recettes"
        linkTo="/recipes"
        section="recipes"
        flexDisplay={flexDisplay}
        showTitle={true}
      />

      <RecipeArticle
        data={recipesData.antiWasteTipsData}
        name="Astuces anti-gaspi"
        linkTo="/special-recipes"
        showTitle={true}
        enableCarousel={true}
      />
    </div>
  );
};

export default RecipeArticleContainer;
