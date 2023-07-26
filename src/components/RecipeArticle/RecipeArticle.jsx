import PropTypes from "prop-types";
import CardSection from "../CardSection/CardSection.jsx";

/**
 * Component that wraps the CardSection component.
 * It takes in data, a title, and a link, and passes them down to the CardSection component.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.data - The data to display in the card section.
 * @param {string} props.name - The title of the card section.
 * @param {string} props.linkTo - The link to redirect from the card section.
 * @returns {JSX.Element} A CardSection element with the specified data, title and link.
 */
const RecipeArticle = ({
  data,
  name,
  linkTo,
  section,
  flexDisplay = true,
  showTitle,
  enableCarousel = false,
  showHeartButton = false,
}) => {
  return (
    <CardSection
      data={data}
      name={name}
      linkTo={linkTo}
      section={section}
      flexDisplay={flexDisplay}
      showTitle={showTitle}
      enableCarousel={enableCarousel}
      showHeartButton={showHeartButton}
    />
  );
};

RecipeArticle.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  flexDisplay: PropTypes.bool,
  showTitle: PropTypes.bool,
  enableCarousel: PropTypes.bool,
  showHeartButton: PropTypes.bool,
};

export default RecipeArticle;
