import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import NavBar from "../NavBar/NavBar.jsx";
import {
  StyledH1,
  StyledH2,
  ContentWrapper,
  StyledImage,
  ImageTextWrapper,
  ContentSection,
  ImageInfoWrapper,
} from "./RecipeJsonDetails.styled";
import RecipeButton from "../RecipeButton/RecipeButton.jsx";
import CounterButton from "../CounterButton/CounterButton.jsx";
import RecipeInfoBox from "../RecipeInfoBox/RecipeInfoBox.jsx";

// import { useDispatch } from "react-redux";
// import { addSavedRecipe } from "../../store/actions/recipeActions.js";

import PropTypes from "prop-types";

const RecipeJsonDetails = ({ recipeType }) => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const recipesData = useSelector((state) => state.recipes.recipeData);

  // const dispatch = useDispatch();

  // const handleSaveRecipe = () => {
  //   dispatch(addSavedRecipe(recipe));
  // };

  useEffect(() => {
    setIsLoading(true); // Définir isLoading à true au début du chargement
    // Choisir la section appropriée de données en fonction de recipeType

    let recipesSection;

    if (recipeType === "currentNews") {
      recipesSection = recipesData.currentRecipeData;
    } else if (recipeType === "topFood") {
      recipesSection = recipesData.topFoodData;
    } else if (recipeType === "antiWasteTipsData") {
      recipesSection = recipesData.antiWasteTipsData;
    } else {
      recipesSection = recipesData[recipeType];
    }

    // Trouver la recette dans les données importées
    const foundRecipe = recipesSection.find((item) => item.id === recipeId);

    setRecipe(foundRecipe);

    // Pour forcer le défilement en haut de la page
    window.scrollTo(0, 0);
    setIsLoading(false); // Définir isLoading à false lorsque les données sont traitées
  }, [recipeId, recipeType, recipesData]);

  if (isLoading) {
    return <h2>Chargement...</h2>; // Vous pouvez mettre un spinner de chargement ici
  }

  if (!recipe) {
    return <h2>Recette non trouvée</h2>;
  }

  return (
    <div>
      <NavBar isRecipePage={true} />
      <div>
        <StyledH1>{recipe.name}</StyledH1>
      </div>
      <ContentWrapper>
        <ImageInfoWrapper>
          <ImageTextWrapper>
            <StyledImage src={recipe.image} alt={recipe.name} />
          </ImageTextWrapper>
          <RecipeInfoBox
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
          />
        </ImageInfoWrapper>

        <ContentSection>
          <RecipeButton recipe={recipe} />
          <StyledH2>Ingrédients</StyledH2>
          <CounterButton />

          {/* Vérifier si l'attribut "sections" existe */}
          {recipe.sections ? (
            // Affichage pour les recettes avec sections
            recipe.sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3>{section.name}</h3>
                <ul>
                  {section.ingredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.name} - {ingredient.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            // Affichage pour les recettes sans sections (ancienne méthode)
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name} - {ingredient.quantity}
                </li>
              ))}
            </ul>
          )}

          <StyledH2>Préparation</StyledH2>

          {/* Vérifier à nouveau si l'attribut "sections" existe pour les étapes */}
          {recipe.sections ? (
            recipe.sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3>{section.name}</h3>
                <ol>
                  {section.steps.map((step, index) => (
                    <li key={index}>
                      <strong>{index + 1}. </strong>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))
          ) : (
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>
                  <strong>{index + 1}. </strong>
                  {step}
                </li>
              ))}
            </ol>
          )}
        </ContentSection>
      </ContentWrapper>
    </div>
  );
};

RecipeJsonDetails.propTypes = {
  recipeType: PropTypes.string.isRequired,
};

export default RecipeJsonDetails;
