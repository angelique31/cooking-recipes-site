import PropTypes from "prop-types";
import { StyledDiv, StyledP, TimerIcon } from "./RecipeInfoBox.styled";
import cookingIcon from "../../assets/Icons/cookingIcon.svg";
import timerIcon from "../../assets/Icons/timerIcon.svg";

/**
 * Displays a recipe information box, containing the number of servings,
 * the preparation time, and the cooking time.
 *
 * @param {Object} props - The properties of the component.
 * @param {number} props.servings - The number of servings that the recipe makes.
 * @param {string} props.prepTime - The time it takes to prepare the recipe.
 * @param {string} [props.cookTime] - The cooking time of the recipe, if applicable.
 * @returns {JSX.Element} A JSX element representing the recipe information box.
 */
const RecipeInfoBox = ({ prepTime, cookTime }) => {
  return (
    <StyledDiv>
      <StyledP>
        <TimerIcon src={timerIcon} alt="Timer icon" />
        <span className="prep-text">Préparation:&nbsp; </span> {prepTime}
      </StyledP>
      {cookTime && (
        <StyledP>
          <img src={cookingIcon} alt="Cooking icon" />
          <span className="cook-text">Cuisson:&nbsp; </span> {cookTime}
        </StyledP>
      )}
    </StyledDiv>
  );
};

RecipeInfoBox.propTypes = {
  prepTime: PropTypes.string.isRequired,
  cookTime: PropTypes.string,
};

export default RecipeInfoBox;
