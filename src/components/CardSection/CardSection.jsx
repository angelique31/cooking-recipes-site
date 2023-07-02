import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RecipeCard from "../RecipeCard/RecipeCard";
import {
  CommonSection,
  CommonCardsContainer,
  DynamicStyledH3,
  StyledDiv,
  CenteredContainer,
  ArrowRightContainer,
  ArrowLeftContainer,
} from "../../assets/Styles/CommonStyles";

import ArrowCarouselIcon from "../ArrowCarouselIcon/ArrowCarouselIcon";

import SwipeableContainer from "../SwipeableContainer/SwipeableContainer";

const Section = ({
  data,
  name,
  linkTo,
  section,
  flexDisplay = true,
  showTitle,
  enableCarousel = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [cardsToShow, setCardsToShow] = useState(
    window.innerWidth > 1190 ? 3 : window.innerWidth > 686 ? 2 : 1
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1190) {
        setCardsToShow(3);
      } else if (window.innerWidth > 686) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    event.stopPropagation();
    setCurrentIndex((oldIndex) => Math.max(oldIndex - 1, 0));
  };

  const handleNext = () => {
    event.stopPropagation();
    setCurrentIndex((oldIndex) =>
      Math.min(oldIndex + 1, data.length - cardsToShow)
    );
  };

  const isMobile = window.innerWidth <= 686;

  return (
    <CommonSection>
      <StyledDiv>
        <DynamicStyledH3 arrowVisible={enableCarousel && currentIndex > 0}>
          {name}
        </DynamicStyledH3>
      </StyledDiv>

      <CenteredContainer>
        {enableCarousel && currentIndex > 0 && (
          // <ArrowLeftContainer onClick={handlePrev}>
          <ArrowLeftContainer onClick={(event) => handlePrev(event)}>
            <ArrowCarouselIcon
              color={isMobile ? "white" : "rgb(255, 66, 105)"}
              direction="left"
              alt="Left arrow"
            />
          </ArrowLeftContainer>
        )}

        <SwipeableContainer onSwipeLeft={handleNext} onSwipeRight={handlePrev}>
          <CommonCardsContainer flexDisplay={flexDisplay}>
            {enableCarousel
              ? data
                  .slice(currentIndex, currentIndex + cardsToShow)
                  .map((item) => (
                    <RecipeCard
                      key={item.id}
                      item={item}
                      linkTo={linkTo}
                      showTitle={showTitle}
                    />
                  ))
              : data.map((item) => (
                  <RecipeCard
                    key={item.id}
                    item={item}
                    linkTo={linkTo}
                    showTitle={showTitle}
                  />
                ))}
          </CommonCardsContainer>
        </SwipeableContainer>
        {enableCarousel && currentIndex < data.length - cardsToShow && (
          // <ArrowRightContainer onClick={handleNext}>
          <ArrowRightContainer onClick={(event) => handleNext(event)}>
            <ArrowCarouselIcon
              color={isMobile ? "white" : "rgb(255, 66, 105)"}
              direction="right"
              alt="Right arrow"
            />
          </ArrowRightContainer>
        )}
      </CenteredContainer>
    </CommonSection>
  );
};

Section.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  flexDisplay: PropTypes.bool,
  showTitle: PropTypes.bool,
};

export default Section;
