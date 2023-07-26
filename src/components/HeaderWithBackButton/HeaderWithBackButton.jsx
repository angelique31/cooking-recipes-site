import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import arrowLeftIcon from "../../assets/Icons/arrowLeftIcon.svg";
import {
  StyledDiv,
  StyledDivH1,
  StyledH1,
  ArrowImg,
} from "./HeaderWithBackButton.styled"; 

/**
 * Renders a header with a back button.
 *
 * @param {Object} props - Component props.
 * @param {string} props.recipeName - Name of the recipe to be displayed in the header.
 */
const HeaderWithBackButton = ({ recipeName }) => {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate(-1); 
  };

  return (
    <StyledDiv>
      <StyledDivH1>
        <StyledH1>{recipeName}</StyledH1>
      </StyledDivH1>
      <ArrowImg
        src={arrowLeftIcon}
        alt="Left arrow"
        onClick={handleArrowClick}
      />
    </StyledDiv>
  );
};

HeaderWithBackButton.propTypes = {
  recipeName: PropTypes.string.isRequired,
};

export default HeaderWithBackButton;
