import PropTypes from "prop-types";
import StyledButton from "./SearchButton.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/**
 * This component renders a search button with a magnifying glass icon.
 *
 * @component
 * @param {boolean} isRecipePage - Prop that determines if the current page is a recipe page.
 */
function SearchButton({ isRecipePage }) {
  return (
    <div>
      <StyledButton isRecipePage={isRecipePage} type="submit">
        {/* Rechercher */}
        <span className="text">Rechercher</span>
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
      </StyledButton>
    </div>
  );
}

SearchButton.propTypes = {
  isRecipePage: PropTypes.bool.isRequired,
};

export default SearchButton;
