import PropTypes from "prop-types";
import RecipeCard from "../RecipeCard/RecipeCard";
import {
  CommonSection,
  CommonCardsContainer,
  StyledH3,
} from "../../assets/Styles/CommonStyles";

/**
 * Cartes génériques des recettes de la page d'accueil
 *
 * @param {object[]} data - Les données.
 * @param {string} title - Le titre de la section.
 * @param {string} linkTo - Lien de redirection pour chaque carte.
 */
const Section = ({ data, title, linkTo }) => {
  return (
    <CommonSection>
      <StyledH3>{title}</StyledH3>
      <CommonCardsContainer>
        {data.map((item, index) => (
          <RecipeCard
            key={index}
            image={item.image}
            title={item.title}
            item={item}
            // index={index}
            linkTo={linkTo}
          />
        ))}
      </CommonCardsContainer>
    </CommonSection>
  );
};
Section.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,

  linkTo: PropTypes.string.isRequired,
};

export default Section;
