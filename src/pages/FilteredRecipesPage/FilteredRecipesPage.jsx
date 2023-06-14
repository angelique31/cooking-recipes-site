import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeListFilter from "../../components/RecipeListFilter/RecipeListFilter";
import {
  RecipesWrapper,
  Subheading,
  RecipeCount,
} from "./FilteredRecipesPage.styled";
import { CommonSection } from "../../assets/Styles/CommonStyles";

const FilteredRecipesPage = () => {
  const filteredRecipes = RecipeListFilter();
  const searchValue = useSelector((state) => state.recipes.searchValue);

  return (
    <div>
      <NavBar showSearchBar />
      <CommonSection>
        <Subheading>{searchValue}</Subheading>
        <RecipeCount> {filteredRecipes.length} recettes</RecipeCount>
        <RecipesWrapper>
          {filteredRecipes.map((recipe, index) => (
            <div key={index}>
              <RecipeCard
                key={recipe.id}
                item={recipe}
                linkTo="/recipe-detail"
              />
              <h3>{recipe.name}</h3>
              {/* Ajoutez ici plus de détails sur la recette, tels que les ingrédients, etc. */}
            </div>
          ))}
        </RecipesWrapper>
      </CommonSection>
    </div>
  );
};

export default FilteredRecipesPage;
