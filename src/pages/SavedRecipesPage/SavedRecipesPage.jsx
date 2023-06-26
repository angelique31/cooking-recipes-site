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
    // Accéder à l'élément de la recette en utilisant l'attribut data-id.
    const recipeElement = document.querySelector(
      `.recipe-item[data-id="${id}"]`
    );

    // Ajouter la classe "removing" pour déclencher la transition CSS.
    if (recipeElement) {
      recipeElement.classList.add("removing");

      // Utiliser setTimeout pour retarder l'envoi de l'action de suppression.
      setTimeout(() => {
        dispatch(deleteRecipe(id));
      }, 500); // 500ms pour correspondre à la durée de la transition.
    }

    // Fermer la modale.
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
