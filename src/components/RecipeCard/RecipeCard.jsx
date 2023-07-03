// import { Link } from "react-router-dom";
// import { StyledCard, CardImage, CardTitle } from "./RecipeCard.styled";
// import PropTypes from "prop-types";

// const RecipeCard = ({
//   item,
//   linkTo,
//   showTitle,
//   isInSavedRecipesPage,

// }) => {
//   return (
//     <Link to={`${linkTo}/${item.id}`}>
//       <StyledCard isInSavedRecipesPage={isInSavedRecipesPage}>
//         <CardImage
//           src={item.image}
//           alt={item.name}
//           isInSavedRecipesPage={isInSavedRecipesPage}
//         />
//         {showTitle && <CardTitle>{item.name}</CardTitle>}
//       </StyledCard>
//     </Link>
//   );
// };

// RecipeCard.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//   }).isRequired,
//   linkTo: PropTypes.string.isRequired,
//   showTitle: PropTypes.bool,
// };

// export default RecipeCard;

/**************************Test avec le coeur******* */
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addSavedRecipe,
//   toggleSavedStatus,
// } from "../../store/actions/recipeActions";
// import { Link } from "react-router-dom";
// import heartIcon from "../../assets/Icons/heartIcon.svg";
// import { StyledCard, CardImage, CardTitle } from "./RecipeCard.styled";
// import PropTypes from "prop-types";

// const RecipeCard = ({
//   item,
//   linkTo,
//   showTitle,
//   isInSavedRecipesPage,
//   showHeartButton,
// }) => {
//   const dispatch = useDispatch();
//   const savedRecipes = useSelector((state) => state.recipes.savedRecipes);
//   const [isSaved, setIsSaved] = useState(false);

//   useEffect(() => {
//     const isRecipeSaved = savedRecipes.some(
//       (savedRecipe) => savedRecipe.recipe.id === item.id && savedRecipe.isSaved
//     );
//     setIsSaved(isRecipeSaved);
//   }, [savedRecipes, item.id]);

//   const handleSaveRecipe = () => {
//     if (!isSaved) {
//       dispatch(addSavedRecipe(item, "topFood")); // Assurez-vous que le deuxième argument est correct pour votre cas
//       setIsSaved(true);
//       dispatch(toggleSavedStatus(item.id, true));

//       try {
//         const newSavedRecipes = [
//           ...savedRecipes,
//           { recipe: item, recipeType: "topFood", isSaved: true }, // Assurez-vous que le deuxième argument est correct pour votre cas
//         ];
//         localStorage.setItem("savedRecipes", JSON.stringify(newSavedRecipes));
//       } catch (error) {
//         console.log(
//           "Erreur lors de l'enregistrement dans localStorage:",
//           error
//         );
//       }
//     } else {
//       console.log("Recipe already saved.");
//     }
//   };

//   return (
//     <Link to={`${linkTo}/${item.id}`}>
//       <StyledCard isInSavedRecipesPage={isInSavedRecipesPage}>
//         <CardImage
//           src={item.image}
//           alt={item.name}
//           isInSavedRecipesPage={isInSavedRecipesPage}
//         />
//         {showTitle && <CardTitle>{item.name}</CardTitle>}

//         {showHeartButton && (
//           <button onClick={handleSaveRecipe}>
//             <img src={heartIcon} alt="heart" />
//             {isSaved ? "Sauvegardée" : "Enregistrer"}
//           </button>
//         )}
//       </StyledCard>
//     </Link>
//   );
// };

// RecipeCard.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//   }).isRequired,
//   linkTo: PropTypes.string.isRequired,
//   showTitle: PropTypes.bool,
// };

// export default RecipeCard;

/**************************Test avec le coeur 2******* */

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addSavedRecipe,
//   toggleSavedStatus,
// } from "../../store/actions/recipeActions";
// import { Link } from "react-router-dom";
// import heartIcon from "../../assets/Icons/heartIcon.svg";
// // import filledHeartIcon from "../../assets/Icons/filledHeartIcon.svg"; // Ajouter une icône de cœur remplie si disponible
// import {
//   StyledCard,
//   CardImage,
//   CardTitle,
//   StyledHeartButton,
// } from "./RecipeCard.styled";
// import PropTypes from "prop-types";

// const RecipeCard = ({
//   item,
//   linkTo,
//   showTitle,
//   isInSavedRecipesPage,
//   showHeartButton,
//   showSaveStatusText = false, // nouvelle prop
// }) => {
//   const dispatch = useDispatch();
//   const savedRecipes = useSelector((state) => state.recipes.savedRecipes);
//   const [isSaved, setIsSaved] = useState(false);

//   useEffect(() => {
//     const isRecipeSaved = savedRecipes.some(
//       (savedRecipe) => savedRecipe.recipe.id === item.id && savedRecipe.isSaved
//     );
//     setIsSaved(isRecipeSaved);
//   }, [savedRecipes, item.id]);

//   const handleSaveRecipe = () => {
//     if (!isSaved) {
//       dispatch(addSavedRecipe(item, "topFood")); // Assurez-vous que le deuxième argument est correct pour votre cas
//       setIsSaved(true);
//       dispatch(toggleSavedStatus(item.id, true));

//       try {
//         const newSavedRecipes = [
//           ...savedRecipes,
//           { recipe: item, recipeType: "topFood", isSaved: true }, // Assurez-vous que le deuxième argument est correct pour votre cas
//         ];
//         localStorage.setItem("savedRecipes", JSON.stringify(newSavedRecipes));
//       } catch (error) {
//         console.log(
//           "Erreur lors de l'enregistrement dans localStorage:",
//           error
//         );
//       }
//     } else {
//       console.log("Recipe already saved.");
//     }
//   };

//   return (
//     <Link to={`${linkTo}/${item.id}`}>
//       <StyledCard isInSavedRecipesPage={isInSavedRecipesPage}>
//         {showHeartButton && (
//           <StyledHeartButton
//             onClick={handleSaveRecipe}
//             className="heart-button"
//           >
//             <img src={heartIcon} alt="heart" />
//             {showSaveStatusText && (isSaved ? "Sauvegardée" : "Enregistrer")}
//           </StyledHeartButton>
//         )}
//         <CardImage
//           src={item.image}
//           alt={item.name}
//           isInSavedRecipesPage={isInSavedRecipesPage}
//         />
//         {showTitle && <CardTitle>{item.name}</CardTitle>}
//       </StyledCard>
//     </Link>
//   );
// };
// RecipeCard.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//   }).isRequired,
//   linkTo: PropTypes.string.isRequired,
//   showTitle: PropTypes.bool,
//   showSaveStatusText: PropTypes.bool, // Ajoutez ceci dans PropTypes
// };

// export default RecipeCard;

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
