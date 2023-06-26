import {
  ModalBackground,
  ModalContent,
  ModalTitle,
  ModalParagraph,
  CloseButton,
} from "./ConfirmationModal.styled";

import { ModifiedButton } from "../RecipeButton/RecipeButton.styled";

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

        <ModifiedButton onClick={onConfirm}>Supprimer</ModifiedButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default ConfirmationModal;
