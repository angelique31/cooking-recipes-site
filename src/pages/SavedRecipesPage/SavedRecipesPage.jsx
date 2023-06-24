import { useSelector } from "react-redux";
import LogoItem from "../../components/NavBar/LogoItem/LogoItem";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const getLinkPrefix = (recipeType) => {
  console.log("recipeType:", recipeType);
  switch (recipeType) {
    case "currentNews":
      return "/current-news";
    case "topFood":
      return "/top-food";
    default:
      return "/recipes";
  }
};
const SavedRecipesPage = () => {
  const savedRecipes = useSelector((state) => state.recipes.savedRecipes);
  // console.log("savedRecipes:", savedRecipes);
  return (
    <div>
      <LogoItem />
      <h1>Mes recettes</h1>
      <ul>
        {/* {savedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            item={recipe}
            linkTo="/recipes"
            showTitle={true}
          />
        ))} */}
        {savedRecipes.map((savedRecipe) => (
          <RecipeCard
            key={savedRecipe.recipe.id}
            item={savedRecipe.recipe}
            linkTo={getLinkPrefix(savedRecipe.recipeType)}
            showTitle={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default SavedRecipesPage;
