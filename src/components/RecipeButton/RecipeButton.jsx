import { useDispatch } from "react-redux";
import { addSavedRecipe } from "../../store/actions/recipeActions";
import { ModifiedButton } from "./RecipeButton.styled.js";
import heartIcon from "../../assets/Icons/heartIcon.svg";

const RecipeButton = ({ recipe }) => {
  const dispatch = useDispatch();

  const handleSaveRecipe = () => {
    dispatch(addSavedRecipe(recipe));
  };

  return (
    <div>
      <ModifiedButton type="submit" onClick={handleSaveRecipe}>
        <img src={heartIcon} alt="heart" />
        Mon carnet
      </ModifiedButton>
    </div>
  );
};
export default RecipeButton;
