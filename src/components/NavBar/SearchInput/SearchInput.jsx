import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  SearchInputWrapper,
  StyledInput,
  IconWrapper,
  StyledForm,
} from "./SearchInput.styled.js";
import SearchButton from "../SearchButton/SearchButton.jsx";

const SearchInput = () => {
  return (
    <StyledForm>
      <SearchInputWrapper>
        <StyledInput
          type="search"
          id="search_input"
          placeholder="Je recherche une recette, un ingrédient ..."
        />
        <IconWrapper>
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </IconWrapper>
      </SearchInputWrapper>
      <SearchButton />
    </StyledForm>
  );
};
export default SearchInput;
