import { ModifiedButton } from "./RecipeButton.styled.js";
import heartIcon from "../../assets/Icons/heartIcon.svg";

/**
 * Composant qui affiche un bouton stylisé.
 * Ce bouton contient une icône de coeur et le texte "Mon carnet".
 *
 * @returns {JSX.Element} Un élément de bouton stylisé contenant une icône et du texte.
 */
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
