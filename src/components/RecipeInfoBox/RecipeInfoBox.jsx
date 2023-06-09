import PropTypes from "prop-types";
import { StyledDiv, StyledP, TimerIcon } from "./RecipeInfoBox.styled";
import cookingIcon from "../../assets/Icons/cookingIcon.svg";
import timerIcon from "../../assets/Icons/timerIcon.svg";

/**
 * Affiche une boîte d'informations sur la recette, contenant le nombre de portions,
 * le temps de préparation, et éventuellement le temps de cuisson.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.servings - Le nombre de portions que la recette produit.
 * @param {string} props.prepTime - Le temps nécessaire à la préparation de la recette.
 * @param {string} [props.cookTime] - Le temps de cuisson de la recette, si applicable.
 * @returns {JSX.Element} Un élément JSX représentant la boîte d'informations de la recette.
 */
const RecipeInfoBox = ({ servings, prepTime, cookTime }) => {
  return (
    <StyledDiv>
      <StyledP>Portions : {servings} de sirop</StyledP>
      <StyledP>
        <TimerIcon src={timerIcon} alt="Timer icon" />
        Préparation : {prepTime}
      </StyledP>
      {cookTime && (
        <StyledP>
          <img src={cookingIcon} alt="Cooking icon" />
          Cuisson : {cookTime}
        </StyledP>
      )}
    </StyledDiv>
  );
};

RecipeInfoBox.propTypes = {
  servings: PropTypes.number.isRequired,
  prepTime: PropTypes.string.isRequired,
  cookTime: PropTypes.string,
};

export default RecipeInfoBox;
