import { useSelector } from "react-redux";
import LogoItem from "../../components/NavBar/LogoItem/LogoItem";

const SavedRecipesPage = () => {
  const savedRecipes = useSelector((state) => state.recipes.savedRecipes);

  return (
    <div>
      <LogoItem />
      <h1>Mes recettes</h1>
      <ul>
        {savedRecipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SavedRecipesPage;
