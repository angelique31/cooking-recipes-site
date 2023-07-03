import {
  ModalBackground,
  ModalContent,
  ModalTitle,
  ModalParagraph,
  CloseButton,
} from "./ConfirmationModal.styled";

import { ModalButton } from "./ConfirmationModal.styled";

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

export default ConfirmationModal;
