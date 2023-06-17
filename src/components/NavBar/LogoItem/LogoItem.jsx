import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { LogoWrapper, StyledH1, IconWrapper } from "./LogoItem.styled";

import { useDispatch } from "react-redux";
import { RESET_SEARCH_VALUE } from "../../../store/reducers/recipeReducer";

const LogoItem = ({ isRecipePage }) => {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    // Dispatcher l'action pour réinitialiser la valeur de recherche dans le store Redux
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

export default LogoItem;
