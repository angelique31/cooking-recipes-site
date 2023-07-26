import PropTypes from "prop-types";
import {
  ModalBackground,
  ModalContent,
  ModalTitle,
  ModalParagraph,
  CloseButton,
  ModalButton,
} from "./ConfirmationModal.styled";

/**
 * A modal dialog for confirming the deletion of a recipe.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.isVisible - Determines if the modal is visible.
 * @param {Function} props.onClose - The function to call when the modal is closed.
 * @param {Function} props.onConfirm - The function to call when the deletion is confirmed.
 * @param {string} props.recipeName - The name of the recipe to delete.
 * @returns {JSX.Element|null} The JSX-code for the confirmation modal.
 */
const ConfirmationModal = ({ isVisible, onClose, onConfirm, recipeName }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>Supprimer une recette</ModalTitle>
        <ModalParagraph>
          Êtes-vous sûr de vouloir supprimer la recette{" "}
          <strong>{recipeName}</strong> de votre carnet ?
        </ModalParagraph>
        <ModalButton onClick={onConfirm}>Supprimer</ModalButton>
      </ModalContent>
    </ModalBackground>
  );
};

ConfirmationModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  recipeName: PropTypes.string.isRequired,
};

export default ConfirmationModal;
