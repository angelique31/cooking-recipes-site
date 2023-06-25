import { useSelector, useDispatch } from "react-redux";
import LogoItem from "../../components/NavBar/LogoItem/LogoItem";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import trashIcon from "../../assets/Icons/trashIcon.svg";
import {
  RecipeList,
  RecipeItem,
  DeleteContainer,
  TrashIcon,
  DeleteText,
  Title,
} from "./SavedRecipesPage.styes";

import { ItemWrapper } from "../../assets/Styles/CommonStyles";

import { deleteRecipe } from "../../store/actions/recipeActions";

const getLinkPrefix = (recipeType) => {
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
  const dispatch = useDispatch();
  const savedRecipes = useSelector((state) => state.recipes.savedRecipes);

  const handleDelete = (id) => {
    dispatch(deleteRecipe(id));
  };

  return (
    <div>
      <LogoItem />
      <h1>Mes recettes</h1>
      <RecipeList>
        {savedRecipes.map((savedRecipe) => (
          <RecipeItem key={savedRecipe.recipe.id}>
            <ItemWrapper>
              <RecipeCard
                item={savedRecipe.recipe}
                linkTo={getLinkPrefix(savedRecipe.recipeType)}
                showTitle={false} // Ne pas afficher le titre sur l'image
                isInSavedRecipesPage={true}
              />
              <div>
                <Title>{savedRecipe.recipe.name}</Title>
                <DeleteContainer
                  onClick={() => handleDelete(savedRecipe.recipe.id)}
                >
                  <TrashIcon src={trashIcon} alt="icon trash" />
                  <DeleteText>Supprimer</DeleteText>
                </DeleteContainer>
              </div>
            </ItemWrapper>
          </RecipeItem>
        ))}
      </RecipeList>
    </div>
  );
};

export default SavedRecipesPage;
