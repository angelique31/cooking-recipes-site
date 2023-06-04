import { StyledNewsCard, NewsCardImage, NewsTitle } from "./NewsCard.styled";
import { Link } from "react-router-dom";

const NewsCard = ({ image, title, index }) => {
  return (
    <Link to={`/news/${index}`}>
      <StyledNewsCard>
        <NewsCardImage src={image} alt={title} />
        <NewsTitle>{title}</NewsTitle>
      </StyledNewsCard>
    </Link>
  );
};

export default NewsCard;
