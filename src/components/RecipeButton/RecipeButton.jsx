import { ModifiedButton } from "./RecipeButton.styled.js";
import heartIcon from "../../assets/Icons/heartIcon.svg";

const RecipeButton = () => {
  return (
    <div>
      <ModifiedButton type="submit">
        <img src={heartIcon} alt="heart" />
        Mon carnet
      </ModifiedButton>
    </div>
  );
};

export default RecipeButton;
