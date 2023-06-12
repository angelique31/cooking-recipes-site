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
 * @param {string} name - Le titre de la section.
 * @param {string} linkTo - Lien de redirection pour chaque carte.
 */
// const Section = ({ data, name, linkTo }) => {
//   return (
//     <CommonSection>
//       <StyledH3>{name}</StyledH3>
//       <CommonCardsContainer>
//         {data.map((item) => (
//           <RecipeCard key={item.id} item={item} linkTo={linkTo} />
//         ))}
//       </CommonCardsContainer>
//     </CommonSection>
//   );
// };

const Section = ({ data, name, linkTo, flexDisplay = true }) => {
  return (
    <CommonSection>
      <StyledH3>{name}</StyledH3>
      <CommonCardsContainer flexDisplay={flexDisplay}>
        {data.map((item) => (
          <RecipeCard key={item.id} item={item} linkTo={linkTo} />
        ))}
      </CommonCardsContainer>
    </CommonSection>
  );
};

Section.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default Section;
