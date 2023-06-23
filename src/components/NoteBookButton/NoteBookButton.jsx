import { ModifiedButton } from "../RecipeButton/RecipeButton.styled";
import { Link } from "react-router-dom";

const NotBookButton = () => {
  return (
    <div>
      <Link to="/mes-recettes">
        <ModifiedButton>Mes recettes</ModifiedButton>
      </Link>
    </div>
  );
};

export default NotBookButton;
