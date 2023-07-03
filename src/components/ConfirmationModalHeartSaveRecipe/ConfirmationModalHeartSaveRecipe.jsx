import {
  ModalWrapper,
  ModalContent,
  Button,
  ModalTitle,
} from "./ConfirmationModalHeartSaveRecipe.styled";

const ConfirmationModalHeartSaveRecipe = ({ onClose }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalTitle>Recette enregistrée!</ModalTitle>
        <p>Votre recette a été ajoutée à votre carnet de recettes.</p>
        <Button onClick={onClose}>OK</Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ConfirmationModalHeartSaveRecipe;
