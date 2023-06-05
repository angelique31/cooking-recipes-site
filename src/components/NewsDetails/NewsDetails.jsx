// NewsDetails.js
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { newsData } from "../../datas/newsData.js";
import {
  StyledImage,
  StyledH1,
  StyledH2,
  ContentWrapper,
} from "./NewsDetails.styled.js";
import NavBar from "../NavBar/NavBar.jsx";

const NewsDetails = () => {
  const { newsId } = useParams();
  const newsItem = newsData.find((item, index) => index === parseInt(newsId));

  // pour forcer le défilement en haut de la page lorsque le composant est monté.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <StyledH1>{newsItem.title}</StyledH1>
      <StyledImage src={newsItem.image} alt={newsItem.title} />
      <ContentWrapper>
        {newsItem.summaryTitle.map((title, index) => (
          <div key={index}>
            <div>
              <StyledH2>{title}</StyledH2>
              <p>{newsItem.summaryText[index]}</p>
            </div>
          </div>
        ))}
      </ContentWrapper>
    </div>
  );
};

export default NewsDetails;
