import LogoItem from "../../components/NavBar/LogoItem/LogoItem";
import SearchInput from "./SearchInput/SearchInput";
import { NavBarContainer, NavBarWrapper } from "../NavBar/NavBar.styled";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = () => {
  const location = useLocation();
  // Définir si vous êtes sur une page où la NavBar doit être modifiée
  const shouldModifyNavBar =
    location.pathname.includes("/news/") ||
    location.pathname.includes("/current-news/") ||
    location.pathname.includes("/top-food/") ||
    location.pathname.includes("/recipes") ||
    location.pathname.includes("/recipe-detail/") ||
    location.pathname.includes("/special-recipes/");

  return (
    <NavBarContainer isRecipePage={shouldModifyNavBar}>
      <LogoItem isRecipePage={shouldModifyNavBar} />
      <NavBarWrapper isRecipePage={shouldModifyNavBar}>
        <div className="navBarContent">
          <SearchInput isRecipePage={shouldModifyNavBar} />
        </div>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

NavBar.propTypes = {
  showSearchBar: PropTypes.bool,
};

export default NavBar;
