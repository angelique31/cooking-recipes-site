import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  SearchInputWrapper,
  StyledInput,
  IconWrapper,
  StyledForm,
} from "./SearchInput.styled.js";
import SearchButton from "../SearchButton/SearchButton.jsx";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../store/actions/recipeActions.js";

const SearchInput = () => {
  const [tempSearchValue, setTempSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le comportement de soumission de formulaire par défaut
    dispatch(setSearchValue(tempSearchValue));
  };
  //la recherche n'est déclenchée que si on clique sur le bouton "Rechercher".
  const handleChange = (e) => {
    const newValue = e.target.value;
    setTempSearchValue(newValue);

    // Si la valeur de l'input est vide, réinitialise la recherche
    if (!newValue.trim()) {
      dispatch(setSearchValue(""));
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SearchInputWrapper>
        <StyledInput
          type="search"
          id="search_input"
          placeholder="Je recherche une recette, un ingrédient ..."
          value={tempSearchValue}
          onChange={handleChange}
        />
        <IconWrapper>
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </IconWrapper>
      </SearchInputWrapper>
      <SearchButton type="submit" />
    </StyledForm>
  );
};

export default SearchInput;
