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
const RecipeCard = ({ image, title, item, linkTo }) => {
  return (
    // <Link to={`${linkTo}/${index}`}>
    <Link to={`${linkTo}/${item.id}`}>
      <StyledCard>
        <CardImage src={image} alt={title} />
        <CardTitle>{title}</CardTitle>
      </StyledCard>
    </Link>
  );
};

RecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default RecipeCard;
