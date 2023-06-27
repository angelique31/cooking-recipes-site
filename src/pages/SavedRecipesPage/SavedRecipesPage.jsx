import { useState } from "react";
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
  PageTitle,
  Title,
} from "./SavedRecipesPage.styes";

import { ItemWrapper } from "../../assets/Styles/CommonStyles";

import { deleteRecipe } from "../../store/actions/recipeActions";

import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";

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

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [selectedRecipeName, setSelectedRecipeName] = useState("");

  const handleDeleteConfirmation = (id, recipeName) => {
    setSelectedRecipeId(id);
    setSelectedRecipeName(recipeName);
    setModalVisible(true);
  };

  const handleDelete = (id) => {
    // Access the recipe element using the data-id attribute.
    const recipeElement = document.querySelector(
      `.recipe-item[data-id="${id}"]`
    );

    // Add the "removing" class to trigger the CSS transition.
    if (recipeElement) {
      recipeElement.classList.add("removing");

      // Use setTimeout to delay the dispatch of the delete action.
      setTimeout(() => {
        dispatch(deleteRecipe(id));

        // Update localStorage after deleting the recipe.
        const updatedSavedRecipes = savedRecipes.filter(
          (savedRecipe) => savedRecipe.recipe.id !== id
        );
        localStorage.setItem(
          "savedRecipes",
          JSON.stringify(updatedSavedRecipes)
        );
      }, 500); // 500ms to match the duration of the transition.
    }

    // Close the modal.
    setModalVisible(false);
  };

  return (
    <div>
      <LogoItem />
      <PageTitle>Mes recettes</PageTitle>
      <RecipeList>
        {savedRecipes.map((savedRecipe) => (
          <RecipeItem
            key={savedRecipe.recipe.id}
            data-id={savedRecipe.recipe.id}
            className="recipe-item"
          >
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
                  onClick={() =>
                    handleDeleteConfirmation(
                      savedRecipe.recipe.id,
                      savedRecipe.recipe.name
                    )
                  }
                >
                  <TrashIcon src={trashIcon} alt="icon trash" />
                  <DeleteText>Supprimer</DeleteText>
                </DeleteContainer>
              </div>
            </ItemWrapper>
          </RecipeItem>
        ))}
      </RecipeList>
      <ConfirmationModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={() => handleDelete(selectedRecipeId)}
        recipeName={selectedRecipeName}
      />
    </div>
  );
};

export default SavedRecipesPage;
