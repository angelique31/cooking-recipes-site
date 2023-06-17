import StyledButton from "./SearchButton.styled";

function SearchButton({ isRecipePage }) {
  return (
    <div>
      <StyledButton isRecipePage={isRecipePage} type="submit">
        Rechercher
      </StyledButton>
    </div>
  );
}

export default SearchButton;
