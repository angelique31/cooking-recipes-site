import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  SearchInputWrapper,
  StyledInput,
  IconWrapper,
  StyledForm,
} from "./SearchInput.styled.js";
import SearchButton from "../SearchButton/SearchButton.jsx";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../store/actions/recipeActions.js";

import { useNavigate } from "react-router-dom";

const SearchInput = ({ isRecipePage }) => {
  const [tempSearchValue, setTempSearchValue] = useState("");
  const [placeholderText, setPlaceholderText] = useState(
    "Je recherche une recette, un ingrédient ..."
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le comportement de soumission de formulaire par défaut
    dispatch(setSearchValue(tempSearchValue));

    navigate("/filtered-recipes");
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

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.matchMedia("(max-width: 420px)").matches) {
        setPlaceholderText("Je recherche une recette ...");
      } else {
        setPlaceholderText("Je recherche une recette, un ingrédient ...");
      }
    };
    // Listener pour les changements de la largeur de la fenêtre
    window.addEventListener("resize", updatePlaceholder);
    // Mise à jour initiale
    updatePlaceholder();

    // Nettoyage
    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SearchInputWrapper>
        <StyledInput
          isRecipePage={isRecipePage}
          type="search"
          id="search_input"
          placeholder={placeholderText}
          value={tempSearchValue}
          onChange={handleChange}
        />
        <IconWrapper className="icon-wrapper">
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </IconWrapper>
      </SearchInputWrapper>
      <SearchButton isRecipePage={isRecipePage} type="submit" />
    </StyledForm>
  );
};

export default SearchInput;
