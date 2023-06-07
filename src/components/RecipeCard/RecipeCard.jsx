import { Link } from "react-router-dom";
import { StyledCard, CardImage, CardTitle } from "./RecipeCard.styled";

const RecipeCard = ({ image, title, index, item, linkTo }) => {
  return (
    <Link to={`${linkTo}/${index}`}>
      <StyledCard>
        <CardImage src={image} alt={title} />
        <CardTitle>{title}</CardTitle>
      </StyledCard>
    </Link>
  );
};

export default RecipeCard;
