import StyledButton from "./SearchButton.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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

export default SearchButton;
