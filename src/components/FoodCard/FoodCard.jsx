import { Card, FoodImage, FoodTitle } from "./FoodCard.styled";

const FoodCard = ({ image, title }) => {
  return (
    <Card>
      <FoodImage src={image} alt={title} />
      <FoodTitle>{title}</FoodTitle>
    </Card>
  );
};

export default FoodCard;
