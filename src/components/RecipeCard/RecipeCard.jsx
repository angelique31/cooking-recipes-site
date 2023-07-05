import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSavedRecipe,
  toggleSavedStatus,
} from "../../store/actions/recipeActions";

import heartIcon from "../../assets/Icons/heartIcon.svg";

import { Link } from "react-router-dom";

// import filledHeartIcon from "../../assets/Icons/filledHeartIcon.svg"; // Ajouter une icône de cœur remplie si disponible
import {
  StyledCard,
  CardImage,
  CardTitle,
  StyledHeartButton,
  HeartIcon,
} from "./RecipeCard.styled";

import ConfirmationModalHeartSaveRecipe from "../../components/ConfirmationModalHeartSaveRecipe/ConfirmationModalHeartSaveRecipe.jsx";

import PropTypes from "prop-types";

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
    // event.stopPropagation();
    e.preventDefault();

    if (!isSaved) {
      dispatch(addSavedRecipe(item, "someRecipeType")); // Note: you need to provide recipeType
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
  showSaveStatusText: PropTypes.bool, // Ajoutez ceci dans PropTypes
};

export default RecipeCard;
