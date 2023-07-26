import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { LogoWrapper, StyledH1, IconWrapper } from "./LogoItem.styled";

import { useDispatch } from "react-redux";
import { RESET_SEARCH_VALUE } from "../../../store/reducers/recipeReducer";

/**
 * A logo component with a click event that resets the search value in Redux store.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isRecipePage - A flag to indicate if the current page is a recipe page.
 * @returns {JSX.Element} The rendered component.
 */
const LogoItem = ({ isRecipePage }) => {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch({ type: RESET_SEARCH_VALUE });
  };

  return (
    <div onClick={handleLogoClick}>
      <Link to="/">
        <LogoWrapper isRecipePage={isRecipePage}>
          <IconWrapper isRecipePage={isRecipePage}>
            <FontAwesomeIcon className="kitchenSet-icon" icon={faKitchenSet} />
          </IconWrapper>
          <StyledH1 isRecipePage={isRecipePage}>Délices Culinaires</StyledH1>
        </LogoWrapper>
      </Link>
    </div>
  );
};

LogoItem.propTypes = {
  isRecipePage: PropTypes.bool,
};

export default LogoItem;
