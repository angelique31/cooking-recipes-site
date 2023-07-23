import PropTypes from "prop-types";
import { IconContainer, StyledSvg } from "./ArrowCarouselIcon.styled";
import ArrowIcon from "./ArrowIcon.svg";

/**
 * ArrowCarouselIcon is a component that renders a SVG arrow icon.
 * It is used for Carousel navigation.
 *
 * @param {Object} props - The props object.
 * @param {string} props.color - The color of the arrow.
 * @param {string} props.direction - The direction of the arrow.
 * @returns {JSX.Element} The rendered ArrowCarouselIcon component.
 */
const ArrowCarouselIcon = ({ color, direction = "right", ...props }) => {
  const transform =
    direction === "left" ? "scale(-1, 1) translate(-30, 0)" : "";

  return (
    <IconContainer>
      <StyledSvg {...props}>
        <ArrowIcon color={color} transform={transform} />
      </StyledSvg>
    </IconContainer>
  );
};

ArrowCarouselIcon.propTypes = {
  color: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
};

export default ArrowCarouselIcon;
