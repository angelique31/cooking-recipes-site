import RecipeArticle from "../RecipeArticle/RecipeArticle";
import RecipeListFilter from "../RecipeListFilter/RecipeListFilter";
import { currentNewsData } from "../../datas/currentRecipeData.js";
import { foodData } from "../../datas/foodData.js";
import { newsData } from "../../datas/newsData.js";
import { antiWasteTipsData } from "../../datas/antiWasteTipsData";

const RecipeArticleContainer = () => {
  // console.log("RecipeArticleContainer is rendered");
  const filteredRecipes = RecipeListFilter();

  let flexDisplay = true;
  if (filteredRecipes.length > 3) {
    flexDisplay = false;
  }

  return (
    <div>
      <RecipeArticle data={currentNewsData} name="En ce moment" linkTo="#" />
      <RecipeArticle data={foodData} name="Top recettes" linkTo="#" />
      <RecipeArticle
        data={newsData}
        name="Dernières actualités"
        linkTo="/news"
      />
      <RecipeArticle
        data={filteredRecipes}
        name="Recettes"
        linkTo="/recipes"
        flexDisplay={flexDisplay}
      />

      <RecipeArticle
        data={antiWasteTipsData}
        name="Astuces anti-gaspi"
        linkTo="/recipe"
      />
    </div>
  );
};

export default RecipeArticleContainer;

// import { useSelector } from "react-redux";
// import recipesData from "../../datas/data.json";

// const RecipeArticleContainer = () => {
//   const searchValue = useSelector((state) => state.recipes.searchValue);

//   let filteredRecipes = recipesData;

//   // Si une valeur de recherche est présente, filtrez les recettes
//   if (searchValue) {
//     filteredRecipes = recipesData.filter((recipe) => {
//       const ingredients = recipe.ingredients
//         .map((ingredient) => ingredient.name)
//         .join(" ");
//       return (
//         recipe.name.toLowerCase().includes(searchValue.toLowerCase()) ||
//         ingredients.toLowerCase().includes(searchValue.toLowerCase())
//       );
//     });
//   }

//   return (
//     <div>
//       <RecipeArticle data={currentNewsData} name="En ce moment" linkTo="#" />
//       <RecipeArticle data={foodData} name="Top recettes" linkTo="#" />
//       <RecipeArticle
//         data={newsData}
//         name="Dernières actualités"
//         linkTo="/news"
//       />
//       <RecipeArticle data={filteredRecipes} name="Recettes" linkTo="/recipes" />
//       <RecipeArticle
//         data={antiWasteTipsData}
//         name="Astuces anti-gaspi"
//         linkTo="/recipe"
//       />
//     </div>
//   );
// };

// export default RecipeArticleContainer;
