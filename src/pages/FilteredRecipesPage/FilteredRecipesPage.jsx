import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeListFilter from "../../components/RecipeListFilter/RecipeListFilter";
import {
  RecipesWrapper,
  StyledH2,
  RecipeCount,
  StyledH3,
  HeadingWrapper,
} from "./FilteredRecipesPage.styled";
import { CommonSection } from "../../assets/Styles/CommonStyles";

const FilteredRecipesPage = () => {
  const filteredRecipes = RecipeListFilter();
  const searchValue = useSelector((state) => state.recipes.searchValue);

  return (
    <div>
      <NavBar showSearchBar />
      <CommonSection>
        <HeadingWrapper>
          <StyledH2>
            {/* pour mettre la 1ere lettre en majuscule :  */}
            {searchValue.charAt(0).toUpperCase() + searchValue.slice(1)}
          </StyledH2>
          <RecipeCount> {filteredRecipes.length} recettes</RecipeCount>
        </HeadingWrapper>
        <RecipesWrapper>
          {filteredRecipes.map((recipe, index) => (
            <div key={index}>
              <RecipeCard
                key={recipe.id}
                item={recipe}
                linkTo="/recipe-detail"
                showTitle={false}
              />
              <StyledH3>{recipe.name}</StyledH3>
              {/* Ajoutez ici plus de détails sur la recette, tels que les ingrédients, etc. */}
            </div>
          ))}
        </RecipesWrapper>
      </CommonSection>
    </div>
  );
};

export default FilteredRecipesPage;
