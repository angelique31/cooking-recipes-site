import { useNavigate } from "react-router-dom";
import arrowLeftIcon from "../../assets/Icons/arrowLeftIcon.svg";
import {
  StyledDiv,
  StyledDivH1,
  StyledH1,
  ArrowImg,
} from "./HeaderWithBackButton.styled"; // Mettez à jour le chemin de votre icône

const HeaderWithBackButton = ({ recipeName }) => {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate(-1); // Ceci ramènera l'utilisateur à la page précédente
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

export default HeaderWithBackButton;
