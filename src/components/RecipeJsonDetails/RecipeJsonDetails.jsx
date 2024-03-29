import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar/NavBar.jsx";
import {
  StyledH2,
  StyledH3,
  ContentWrapper,
  StyledImage,
  ImageTextWrapper,
  ContentSection,
  ImageInfoWrapper,
  StyledDiv,
} from "./RecipeJsonDetails.styled";

import RecipeButton from "../RecipeButton/RecipeButton.jsx";
import CounterButton from "../CounterButton/CounterButton.jsx";
import RecipeInfoBox from "../RecipeInfoBox/RecipeInfoBox.jsx";
import { setNumberOfPeople } from "../../store/actions/recipeActions.js";
import HeaderWithBackButton from "../HeaderWithBackButton/HeaderWithBackButton.jsx";
import Footer from "../Footer/Footer.jsx";
import IngredientItem from "../IngredientItem/IngredientItem.jsx";
/**
 * Displays the detailed information of a selected recipe. The information includes
 * the recipe name, image, preparation time, cooking time, ingredients with their quantities
 * adjusted to the number of people, and cooking steps.
 * The recipe data is fetched from a Redux store based on the recipe ID from the route parameters.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.recipeType - The type of the recipe, used to determine the data set
 * in the Redux store to fetch the recipe from.
 */

const RecipeJsonDetails = ({ recipeType }) => {
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const recipesData = useSelector((state) => state.recipes.recipeData);
  const numberOfPeople = useSelector((state) => state.recipes.numberOfPeople);

  const adjustIngredientQuantity = (quantity, initialServings) => {
    if (!quantity) {
      return "";
    }

    // Split the quantity string into value and unit
    const quantityParts = quantity.match(/(\d*\.*\d*)\s*(.*)/);

    // Check if we have a value part which is numeric
    if (quantityParts && !isNaN(quantityParts[1])) {
      const value = parseFloat(quantityParts[1]);
      const unit = quantityParts[2];

      // Multiply the numeric part by the number of people and divide by initial servings
      const adjustedValue = (value * numberOfPeople) / initialServings;

      // Round to the nearest integer
      const roundedValue = Math.round(adjustedValue);

      // Return adjusted value with unit
      // return `${adjustedValue}${unit ? " " + unit : ""}`;
      return `${roundedValue}${unit ? " " + unit : ""}`;
    }

    // If no numeric value, return the quantity as is
    return quantity;
  };
  // Ceci est un nouvel effet qui se déclenche lorsque 'recipe' change
  useEffect(() => {
    // Vérifier si la recette est chargée
    if (recipe && recipe.servingSize) {
      // Mettre à jour le compteur avec la valeur de servingSize de la recette
      dispatch(setNumberOfPeople(parseInt(recipe.servingSize, 10)));
    }
  }, [recipe, dispatch]);

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
      {/* <CategoryCard /> */}
      <HeaderWithBackButton recipeName={recipe.name} />
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
          <RecipeButton recipe={recipe} recipeType={recipeType} />
          <StyledDiv>
            <StyledH2>Ingrédients</StyledH2>
            <CounterButton servingSize={recipe.servingSize} />
            {/* Vérifier si l'attribut "sections" existe */}
            {recipe.sections ? (
              // Affichage pour les recettes avec sections
              recipe.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <StyledH3>{section.name}</StyledH3>
                  <ul>
                    {section.ingredients.map((ingredient, index) => (
                      // <li key={index}>
                      //   {adjustIngredientQuantity(
                      //     ingredient.quantity,
                      //     recipe.servingSize
                      //   )}{" "}
                      //   {ingredient.name}
                      // </li>
                      <li key={index}>
                        <IngredientItem
                          name={ingredient.name}
                          quantity={adjustIngredientQuantity(
                            ingredient.quantity,
                            recipe.servingSize
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              // Affichage pour les recettes sans sections
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {/* {adjustIngredientQuantity(
                      ingredient.quantity,
                      recipe.servingSize
                    )}{" "}
                    {ingredient.name} */}
                    <IngredientItem
                      name={ingredient.name}
                      quantity={adjustIngredientQuantity(
                        ingredient.quantity,
                        recipe.servingSize
                      )}
                    />
                  </li>
                ))}
              </ul>
            )}
            <StyledH2>Préparation</StyledH2>
            {/* Vérifier à nouveau si l'attribut "sections" existe pour les étapes */}
            {recipe.sections ? (
              recipe.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <StyledH3>{section.name}</StyledH3>
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
          </StyledDiv>
        </ContentSection>
      </ContentWrapper>
      <Footer />
    </div>
  );
};

RecipeJsonDetails.propTypes = {
  recipeType: PropTypes.string.isRequired,
};

export default RecipeJsonDetails;
