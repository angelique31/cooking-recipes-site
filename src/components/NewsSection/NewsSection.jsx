import { newsData } from "../../datas/newsData.js";
import NewsCard from "../NewsCard/NewsCard.jsx";
import {
  CommonSection,
  CommonCardsContainer,
  StyledH3,
} from "../../assets/Styles/CommonStyles";

const NewsSection = () => {
  return (
    <CommonSection>
      <StyledH3>Dernières actualités</StyledH3>
      <CommonCardsContainer>
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            image={news.image}
            title={news.title}
            date={news.date}
            summary={news.summary}
            index={index}
          />
        ))}
      </CommonCardsContainer>
    </CommonSection>
  );
};

export default NewsSection;
