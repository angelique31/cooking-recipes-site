import { useState } from "react";
import {
  HamburgerMenuContainer,
  Icon,
  Bar,
  MobileNavMenu,
  MobileNavLink,
  SpecialNavLink,
} from "./HamburgerMenu.styled";

const categories = ["Rapide", "Entrées", "Plats", "Desserts", "Apéritifs"];

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // return (
  //   <>
  //     <HamburgerMenuContainer onClick={() => setIsMenuOpen(!isMenuOpen)}>
  //       <Icon isMenuOpen={isMenuOpen}>
  //         <Bar />
  //         <Bar />
  //         <Bar />
  //       </Icon>
  //     </HamburgerMenuContainer>

  //     {isMenuOpen && (
  //       <MobileNavMenu>
  //         <MobileNavLink to="/mes-recettes">Carnet de Recettes</MobileNavLink>
  //         {/* Ajoutez d'autres liens ici si nécessaire */}
  //       </MobileNavMenu>
  //     )}
  //   </>
  // );
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
          <SpecialNavLink to="/mes-recettes">Carnet de Recettes</SpecialNavLink>
          {categories.map((category, index) => (
            <MobileNavLink to={`/category/${category}`} key={index}>
              {/* {category} */}
              {category === "Rapide" ? "Recettes rapides" : category}
            </MobileNavLink>
          ))}
        </MobileNavMenu>
      )}
    </>
  );
};

export default HamburgerMenu;
