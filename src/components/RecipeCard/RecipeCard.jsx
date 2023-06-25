import { Link } from "react-router-dom";
import { StyledCard, CardImage, CardTitle } from "./RecipeCard.styled";
import PropTypes from "prop-types";
/**
 * composant qui affiche une carte de recette.
 * Ce composant contient une image, un titre et un lien vers la recette détaillée.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.image - L'URL de l'image de la recette.
 * @param {string} props.title - Le titre de la recette.
 * @param {number} props.index - L'index de la recette dans une liste.
 * @param {string} props.linkTo - Le chemin de base pour le lien vers la recette détaillée.
 * @returns {JSX.Element} Un élément de carte contenant une image, un titre et un lien.
 */

const RecipeCard = ({ item, linkTo, showTitle, isInSavedRecipesPage }) => {
  return (
    <Link to={`${linkTo}/${item.id}`}>
      <StyledCard isInSavedRecipesPage={isInSavedRecipesPage}>
        <CardImage
          src={item.image}
          alt={item.name}
          isInSavedRecipesPage={isInSavedRecipesPage}
        />
        {showTitle && <CardTitle>{item.name}</CardTitle>}
      </StyledCard>
    </Link>
  );
};

RecipeCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  linkTo: PropTypes.string.isRequired,
  showTitle: PropTypes.bool,
};

export default RecipeCard;
