import { useState, useEffect } from "react";
import LogoItem from "../../components/NavBar/LogoItem/LogoItem";
import SearchInput from "./SearchInput/SearchInput";
import {
  NavBarContainer,
  NavBarWrapper,
  LogoAndButtonWrapper,
} from "../NavBar/NavBar.styled";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import NotBookButton from "../NoteBookButton/NoteBookButton";

const NavBar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop <= lastScrollTop || currentScrollTop < 50) {
        setIsNavBarVisible(true);
      } else {
        setIsNavBarVisible(false);
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  // Définir si vous êtes sur une page où la NavBar doit être modifiée
  const shouldModifyNavBar =
    location.pathname.includes("/news/") ||
    location.pathname.includes("/current-news/") ||
    location.pathname.includes("/top-food/") ||
    location.pathname.includes("/recipes") ||
    location.pathname.includes("/recipe-detail/") ||
    location.pathname.includes("/special-recipes/");

  return (
    <NavBarContainer
      isRecipePage={shouldModifyNavBar}
      className={isNavBarVisible ? "visible" : "hidden"}
    >
      <LogoAndButtonWrapper>
        <LogoItem isRecipePage={shouldModifyNavBar} />
        <NotBookButton />
      </LogoAndButtonWrapper>
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
