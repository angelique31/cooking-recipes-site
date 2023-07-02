import { useState } from "react";
import {
  HamburgerMenuContainer,
  Icon,
  Bar,
  MobileNavMenu,
  MobileNavLink,
} from "./HamburgerMenu.styled";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HamburgerMenuContainer onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Icon isMenuOpen={isMenuOpen}>
          <Bar />
          <Bar />
          <Bar />
        </Icon>
      </HamburgerMenuContainer>

      {isMenuOpen && (
        <MobileNavMenu>
          <MobileNavLink to="/mes-recettes">Carnet de Recettes</MobileNavLink>
          {/* Ajoutez d'autres liens ici si nécessaire */}
        </MobileNavMenu>
      )}
    </>
  );
};

export default HamburgerMenu;
