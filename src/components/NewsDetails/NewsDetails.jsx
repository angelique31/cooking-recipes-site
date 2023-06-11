// NewsDetails.js
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { newsData } from "../../datas/newsData.js";
import {
  StyledImage,
  StyledH1,
  StyledH2,
  StyleDiv,
  FlexContainer,
  FlexDiv,
  FlexItem,
  StyledDivLineHeight,
} from "./NewsDetails.styled.js";
import NavBar from "../NavBar/NavBar.jsx";

const NewsDetails = () => {
  const { newsId } = useParams();
  const newsItem = newsData.find((item) => item.id === newsId);

  // pour forcer le défilement en haut de la page lorsque le composant est monté.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <StyledH1>{newsItem.name}</StyledH1>
      <FlexContainer>
        {newsItem.summaryTitle.map((title, index) => {
          if (index === 0) {
            return (
              <FlexItem key={index}>
                <StyledImage src={newsItem.image} alt={newsItem.title} />
                <StyleDiv>
                  <StyledH2>{title}</StyledH2>
                  <p>{newsItem.summaryText[index]}</p>
                </StyleDiv>
              </FlexItem>
            );
          }
          return null;
        })}
        <FlexDiv>
          {newsItem.summaryTitle.slice(1).map((nextTitle, nextIndex) => (
            <StyledDivLineHeight key={nextIndex + 1}>
              <StyledH2>{nextTitle}</StyledH2>
              <p>{newsItem.summaryText[nextIndex + 1]}</p>
            </StyledDivLineHeight>
          ))}
        </FlexDiv>
      </FlexContainer>
    </div>
  );
};

export default NewsDetails;
