import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBar from "../NavBar/NavBar.jsx";
import HeaderWithBackButton from "../HeaderWithBackButton/HeaderWithBackButton.jsx";
import Footer from "../Footer/Footer.jsx";

import {
  StyledImage,
  StyledH2,
  StyleDiv,
  FlexContainer,
  FlexItem,
  StyledDivLineHeight,
} from "./NewsDetails.styled.js";

/**
 * Component to display details of a single news item.
 * Fetches news item using a URL parameter, and presents its details.
 * Includes navigation bar, back button, and footer. On mount, scrolls to the top of the page.
 */
const NewsDetails = () => {
  const { newsId } = useParams();

  // Sélectionner les données de news depuis le store Redux
  // const newsData = useSelector((state) => state.newsData);
  const newsData = useSelector((state) => state.recipes.recipeData.newsData);

  const newsItem = newsData.find((item) => item.id === newsId);

  // pour forcer le défilement en haut de la page lorsque le composant est monté.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <HeaderWithBackButton recipeName={newsItem.name} />
      <FlexContainer>
        {newsItem.summaryTitle.map((title, index) => {
          const currentText = newsItem.summaryText[index];

          if (index === 0) {
            return (
              <FlexItem key={index}>
                <StyledImage src={newsItem.image} alt={newsItem.title} />
                <StyleDiv>
                  <StyledH2>{title}</StyledH2>
                  {/* Vérifier si currentText est un tableau et le traiter en conséquence */}
                  {Array.isArray(currentText) ? (
                    currentText.map((text, textIndex) => (
                      <p key={textIndex}>{text}</p>
                    ))
                  ) : (
                    <p>{currentText}</p>
                  )}
                </StyleDiv>
              </FlexItem>
            );
          } else {
            return (
              <StyledDivLineHeight key={index}>
                <StyledH2>{title}</StyledH2>
                {/* Vérifier si currentText est un tableau et le traiter en conséquence */}
                {Array.isArray(currentText) ? (
                  currentText.map((text, textIndex) => (
                    <p key={textIndex}>{text}</p>
                  ))
                ) : (
                  <p>{currentText}</p>
                )}
              </StyledDivLineHeight>
            );
          }
        })}
      </FlexContainer>
      <Footer />
    </div>
  );
};
export default NewsDetails;
