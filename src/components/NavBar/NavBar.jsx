import LogoItem from "../../components/NavBar/LogoItem/LogoItem";
import SearchInput from "./SearchInput/SearchInput";
import { NavBarWrapper } from "../NavBar/NavBar.styled";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <LogoItem />
      <SearchInput />
    </NavBarWrapper>
  );
};

export default NavBar;
