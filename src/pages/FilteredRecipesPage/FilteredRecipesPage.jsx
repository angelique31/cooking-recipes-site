import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import {
  RecipesWrapper,
  StyledH2,
  RecipeCount,
  StyledH3,
  HeadingWrapper,
} from "./FilteredRecipesPage.styled";
import { CommonSection } from "../../assets/Styles/CommonStyles";
import RecipeListFilter from "../../components/RecipeListFilter/RecipeListFilter";

const FilteredRecipesPage = () => {
  const { categoryName } = useParams();
  const searchValue = useSelector((state) => state.recipes.searchValue);

  const allData = useSelector((state) => state.recipes.recipeData);
  const recipesData = allData.regularRecipes;

  // Fonction pour supprimer les accents d'une chaîne de caractères
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  let filteredRecipes = RecipeListFilter();

  // Filtrage par catégorie
  if (categoryName && !searchValue) {
    filteredRecipes = recipesData.filter((recipe) => {
      // Vérifier que la recette a une catégorie avant de continuer
      if (!recipe.category) {
        return false;
      }
      return recipe.category.some((cat) => {
        let cleanCat = removeAccents(cat).toLowerCase();
        let cleanCategoryName = removeAccents(categoryName).toLowerCase();
        return (
          cleanCat === cleanCategoryName || cleanCat + "s" === cleanCategoryName
        );
      });
    });
  }

  return (
    <div>
      <NavBar />
      <CommonSection>
        <HeadingWrapper>
          <StyledH2>
            {categoryName
              ? `Recettes: ${categoryName}`
              : searchValue.charAt(0).toUpperCase() + searchValue.slice(1)}
          </StyledH2>
          <RecipeCount>{filteredRecipes.length} recettes</RecipeCount>
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
            </div>
          ))}
        </RecipesWrapper>
      </CommonSection>
    </div>
  );
};

export default FilteredRecipesPage;
