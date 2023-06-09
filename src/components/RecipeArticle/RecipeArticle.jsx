import PropTypes from "prop-types";
import CardSection from "../CardSection/CardSection.jsx";

/**
 * Composant qui englobe le composant CardSection.
 * Il reçoit des données, un titre et un lien, et les transmet au composant CardSection.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Array} props.data - Les données à afficher dans la section de la carte.
 * @param {string} props.title - Le titre de la section de la carte.
 * @param {string} props.linkTo - Le lien vers lequel rediriger depuis la section de la carte.
 * @returns {JSX.Element} Un élément CardSection avec les données, titre et lien spécifiés.
 */
const RecipeArticle = ({ data, title, linkTo }) => {
  return <CardSection data={data} title={title} linkTo={linkTo} />;
};

RecipeArticle.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default RecipeArticle;
