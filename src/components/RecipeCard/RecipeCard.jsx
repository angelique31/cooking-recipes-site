import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSavedRecipe,
  toggleSavedStatus,
} from "../../store/actions/recipeActions";

import heartIcon from "../../assets/Icons/heartIcon.svg";

import { Link } from "react-router-dom";

import {
  StyledCard,
  CardImage,
  CardTitle,
  StyledHeartButton,
  HeartIcon,
} from "./RecipeCard.styled";

import ConfirmationModalHeartSaveRecipe from "../../components/ConfirmationModalHeartSaveRecipe/ConfirmationModalHeartSaveRecipe.jsx";

/**
 * A card component to display a single recipe.
 * The card displays a recipe image, name, and a save button.
 * It checks if the recipe is already saved and updates the save button accordingly.
 * When the save button is clicked, it saves the recipe and shows a confirmation modal.
 * The card also links to the detailed view of the recipe.
 *
 * @component
 * @param {Object} props - Properties passed to the component
 * @param {Object} props.item - The recipe item to be displayed
 * @param {string} props.linkTo - The URL to link to the detailed view of the recipe
 * @param {boolean} props.showTitle - A flag to determine whether to show the recipe name or not
 * @param {boolean} props.isInSavedRecipesPage - A flag to determine if the component is used in the Saved Recipes page
 * @param {boolean} props.showHeartButton - A flag to determine whether to show the save button or not
 * @returns {JSX.Element} A card component that shows a single recipe
 */
const RecipeCard = ({
  item,
  linkTo,
  showTitle,
  isInSavedRecipesPage,
  showHeartButton,
}) => {
  const dispatch = useDispatch();
  const savedRecipes = useSelector((state) => state.recipes.savedRecipes);

  const [isSaved, setIsSaved] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const isRecipeSaved = savedRecipes.some(
      (savedRecipe) => savedRecipe.recipe.id === item.id && savedRecipe.isSaved
    );
    setIsSaved(isRecipeSaved);
  }, [savedRecipes, item.id]);

  const handleSaveRecipe = (e) => {
    e.preventDefault();

    if (!isSaved) {
      dispatch(addSavedRecipe(item, "someRecipeType"));
      setIsSaved(true);
      dispatch(toggleSavedStatus(item.id, true));

      try {
        const newSavedRecipes = [
          ...savedRecipes,
          { recipe: item, recipeType: "someRecipeType", isSaved: true },
        ];
        localStorage.setItem("savedRecipes", JSON.stringify(newSavedRecipes));
      } catch (error) {
        console.log(
          "Erreur lors de l'enregistrement dans localStorage:",
          error
        );
      }
    } else {
      console.log("Recipe already saved.");
    }

    // Open the confirmation modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Link to={`${linkTo}/${item.id}`}>
        <StyledCard isInSavedRecipesPage={isInSavedRecipesPage}>
          {showHeartButton && (
            <StyledHeartButton onClick={(e) => handleSaveRecipe(e)}>
              <HeartIcon src={heartIcon} alt="heart" />
            </StyledHeartButton>
          )}
          <CardImage
            src={item.image}
            alt={item.name}
            isInSavedRecipesPage={isInSavedRecipesPage}
          />
          {showTitle && <CardTitle>{item.name}</CardTitle>}
        </StyledCard>
      </Link>
      {isModalOpen && (
        <ConfirmationModalHeartSaveRecipe onClose={handleCloseModal} />
      )}
    </>
  );
};
RecipeCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  linkTo: PropTypes.string.isRequired,
  showTitle: PropTypes.bool,
  isInSavedRecipesPage: PropTypes.bool,
  showHeartButton: PropTypes.bool,
};

export default RecipeCard;
