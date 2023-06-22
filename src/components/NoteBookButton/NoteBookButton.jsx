import { ModifiedButton } from "../RecipeButton/RecipeButton.styled";

/**
 * Composant qui affiche un bouton stylisé.
 * Ce bouton contient le texte "Mes recettes".
 *
 * @returns {JSX.Element} Un élément de bouton stylisé contenant du texte.
 */
const NotBookButton = () => {
  return (
    <div>
      <ModifiedButton>Mes recettes</ModifiedButton>
    </div>
  );
};

export default NotBookButton;
