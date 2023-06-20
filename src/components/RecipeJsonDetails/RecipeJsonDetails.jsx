import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import recipesData from "../../datas/data.json";

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

import PropTypes from "prop-types";

const RecipeJsonDetails = ({ recipeType }) => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Choisir la section appropriée de données en fonction de recipeType
    // const recipesSection = recipesData[recipeType];

    let recipesSection;

    if (recipeType === "currentNews") {
      recipesSection = recipesData.currentRecipeData; // Accéder aux données "En ce moment" dans le fichier JSON
    } else if (recipeType === "topFood") {
      recipesSection = recipesData.topFoodData; // Accéder aux données "Top recettes" dans le fichier JSON
    } else {
      recipesSection = recipesData[recipeType];
    }

    // switch (recipeType) {
    //   case "currentNews":
    //     recipesSection = recipesData.regularRecipes; // Accéder aux données "En ce moment" dans le fichier JSON
    //     break;
    //   case "topFood":
    //     recipesSection = recipesData.topFoodData || []; // Accéder aux données "Top recettes" dans le fichier JSON
    //     break;
    //   default:
    //     recipesSection = recipesData[recipeType];
    // }

    // Trouver la recette dans les données importées
    const foundRecipe = recipesSection.find((item) => item.id === recipeId);

    // Si la recette n'est pas trouvée dans topFoodData, effectuer une recherche de secours dans regularRecipes
    // if (!foundRecipe) {
    //   const regularRecipesSection = recipesData.regularRecipes || [];
    //   foundRecipe = regularRecipesSection.find((item) => item.id === recipeId);
    // }

    setRecipe(foundRecipe);

    // Pour forcer le défilement en haut de la page
    window.scrollTo(0, 0);
  }, [recipeId, recipeType]);

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
          <RecipeButton />
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
