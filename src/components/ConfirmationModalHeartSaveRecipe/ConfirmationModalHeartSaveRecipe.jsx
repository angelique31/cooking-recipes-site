import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  ModalWrapper,
  ModalContent,
  Button,
  CloseButton,
  StyledP,
} from "./ConfirmationModalHeartSaveRecipe.styled";

/**
 * A modal dialog for confirming that a recipe has been saved.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onClose - The function to call when the modal is closed.
 * @returns {JSX.Element} The JSX-code for the confirmation modal.
 */
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

ConfirmationModalHeartSaveRecipe.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ConfirmationModalHeartSaveRecipe;
