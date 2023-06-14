import LogoItem from "../../components/NavBar/LogoItem/LogoItem";
import SearchInput from "./SearchInput/SearchInput";
import { NavBarWrapper } from "../NavBar/NavBar.styled";

import PropTypes from "prop-types";

const NavBar = ({ showSearchBar }) => {
  return (
    <NavBarWrapper>
      <LogoItem />
      {/* <SearchInput /> */}
      {showSearchBar && <SearchInput />}{" "}
      {/* Montrez la barre de recherche seulement si showSearchBar est vrai */}
    </NavBarWrapper>
  );
};

NavBar.propTypes = {
  showSearchBar: PropTypes.bool,
};

export default NavBar;
