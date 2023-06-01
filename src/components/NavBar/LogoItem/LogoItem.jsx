import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { LogoWrapper, StyledH1, IconWrapper } from "./LogoItem.styled";

const LogoItem = () => {
  return (
    <div>
      <LogoWrapper>
        <IconWrapper>
          <FontAwesomeIcon className="kitchenSet-icon" icon={faKitchenSet} />
        </IconWrapper>
        <StyledH1>Délices Culinaires</StyledH1>
      </LogoWrapper>
    </div>
  );
};

export default LogoItem;
