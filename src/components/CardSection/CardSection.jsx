import { useState } from "react";
import PropTypes from "prop-types";
import RecipeCard from "../RecipeCard/RecipeCard";
import {
  CommonSection,
  CommonCardsContainer,
  DynamicStyledH3,
  StyledDiv,
  ArrowContainer,
  CenteredContainer,
  ArrowImgLargeScreen,
  ArrowImgSmallScreen,
  ArrowLeftSmallScreen,
  ArrowRightSmallScreen,
} from "../../assets/Styles/CommonStyles";

import arrowCarouselLeft from "../../assets/Icons/arrowCarouselLeft.svg";
import arrowCarouselRight from "../../assets/Icons/arrowCarouselRight.svg";

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

  const handlePrev = () => {
    setCurrentIndex((oldIndex) => Math.max(oldIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((oldIndex) => Math.min(oldIndex + 1, data.length - 3)); // 3 étant le nombre de cartes affichées
  };

  return (
    <CommonSection>
      <StyledDiv>
        <DynamicStyledH3 arrowVisible={enableCarousel && currentIndex > 0}>
          {name}
        </DynamicStyledH3>
      </StyledDiv>
      <CenteredContainer>
        {enableCarousel && currentIndex > 0 && (
          <ArrowImgLargeScreen
            src={arrowCarouselLeft}
            alt="Left arrow"
            onClick={handlePrev}
          />
        )}
        <CommonCardsContainer flexDisplay={flexDisplay}>
          {enableCarousel
            ? data
                .slice(currentIndex, currentIndex + 3)
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
        {enableCarousel && currentIndex < data.length - 3 && (
          <ArrowImgLargeScreen
            src={arrowCarouselRight}
            alt="Right arrow"
            onClick={handleNext}
          />
        )}
        <ArrowContainer>
          {/* Ici, ajoutez les flèches pour les petits écrans */}
          {enableCarousel && currentIndex > 0 && (
            <ArrowLeftSmallScreen
              src={arrowCarouselLeft}
              alt="Left arrow"
              onClick={handlePrev}
            />
          )}
          {enableCarousel && currentIndex < data.length - 3 && (
            <ArrowRightSmallScreen
              src={arrowCarouselRight}
              alt="Right arrow"
              onClick={handleNext}
            />
          )}
        </ArrowContainer>
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
