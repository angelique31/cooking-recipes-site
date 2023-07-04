import { Link } from "react-router-dom";
import {
  ModalWrapper,
  ModalContent,
  Button,
  // ModalTitle,
  CloseButton,
  StyledP,
} from "./ConfirmationModalHeartSaveRecipe.styled";

const ConfirmationModalHeartSaveRecipe = ({ onClose }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <StyledP>
          Votre recette a été ajoutée à votre carnet de recettes.
        </StyledP>
        <Link to="/mes-recettes">
          <Button>Voir la recette dans mon carnet</Button>
        </Link>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ConfirmationModalHeartSaveRecipe;
