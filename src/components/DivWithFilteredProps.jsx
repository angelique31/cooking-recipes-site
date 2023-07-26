import PropTypes from "prop-types";

/**
 * A higher-order component that filters out the 'isRecipePage' prop
 * and passes the remaining props to a div element.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} props.isRecipePage - A flag to indicate whether the current page is a recipe page. This prop is not passed to the div element.
 * @param {Object} props.rest - All other props to be passed to the div element.
 *
 * @returns {JSX.Element} A div element with filtered props.
 */
// eslint-disable-next-line no-unused-vars
const DivWithFilteredProps = ({ isRecipePage, ...props }) => <div {...props} />;

DivWithFilteredProps.propTypes = {
  isRecipePage: PropTypes.bool,
};
export default DivWithFilteredProps;
