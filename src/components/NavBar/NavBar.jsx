import LogoItem from "../../components/NavBar/LogoItem/LogoItem";
import SearchInput from "./SearchInput/SearchInput";
import { NavBarWrapper } from "../NavBar/NavBar.styled";

import PropTypes from "prop-types";

const NavBar = () => {
  return (
    <div>
      <LogoItem />
      <NavBarWrapper>
        <div className="navBarContent">
          {/* <LogoItem /> */}
          <SearchInput />
        </div>
      </NavBarWrapper>
    </div>
  );
};

NavBar.propTypes = {
  showSearchBar: PropTypes.bool,
};

export default NavBar;
