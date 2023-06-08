import { StyledDiv, StyledP, TimerIcon } from "./RecipeInfoBox.styled";
import cookingIcon from "../../assets/Icons/cookingIcon.svg";
import timerIcon from "../../assets/Icons/timerIcon.svg";

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

export default RecipeInfoBox;
