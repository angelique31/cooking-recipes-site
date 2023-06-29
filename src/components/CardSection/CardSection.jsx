import PropTypes from "prop-types";
import RecipeCard from "../RecipeCard/RecipeCard";
import {
  CommonSection,
  CommonCardsContainer,
  StyledH3,
  StyledDiv,
  StyledP,
  ArrowImg,
} from "../../assets/Styles/CommonStyles";
import arrowRightIcon from "../../assets/Icons/arrowRightIcon.svg";

/**
 * Cartes génériques des recettes de la page d'accueil
 *
 * @param {object[]} data - Les données.
 * @param {string} name - Le titre de la section.
 * @param {string} linkTo - Lien de redirection pour chaque carte.
 */

const Section = ({
  data,
  name,
  linkTo,
  section,
  flexDisplay = true,
  showTitle,
}) => {
  // console.log("linkTo in Section:", linkTo);
  return (
    <CommonSection>
      <StyledDiv>
        <StyledH3>{name}</StyledH3>
        {/* <StyledP>
          Voir plus <ArrowSpan className="arrow">&rarr;</ArrowSpan>
        </StyledP> */}
        <StyledP>
          Voir plus
          <ArrowImg src={arrowRightIcon} alt="Arrow right" />
        </StyledP>
      </StyledDiv>
      <CommonCardsContainer flexDisplay={flexDisplay}>
        {data.map((item) => (
          <RecipeCard
            key={item.id}
            item={item}
            linkTo={linkTo}
            showTitle={showTitle}
          />
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
  flexDisplay: PropTypes.bool,
  showTitle: PropTypes.bool,
};

export default Section;
