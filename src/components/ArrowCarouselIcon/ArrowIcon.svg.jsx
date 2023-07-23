import PropTypes from "prop-types";

/**
 * ArrowIcon - A functional React component that returns an SVG arrow icon.
 *
 * @param {Object} props - The props that control the ArrowIcon's features.
 * @param {string} props.color - The fill color of the SVG arrow.
 * @param {string} props.transform - The transform properties to apply to the SVG arrow.
 */
const ArrowIcon = ({ color, transform }) => (
  <svg viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform={transform}>
      <path
        fill={color}
        d="M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z"
      />
    </g>
  </svg>
);

ArrowIcon.propTypes = {
  color: PropTypes.string.isRequired,
  transform: PropTypes.string.isRequired,
};

export default ArrowIcon;
