import PropTypes from "prop-types";

/**
 * IngredientItem component.
 *
 * This component displays the name and quantity of an ingredient.
 * If the quantity is more than 1, the name of the ingredient is pluralized by adding "s" at the end,
 * assuming the name does not already end with "s".
 *
 * @component
 * @param {Object} props - The properties that define the IngredientItem component.
 * @param {string} props.name - The name of the ingredient.
 * @param {number} props.quantity - The quantity of the ingredient.
 * @returns {JSX.Element} The rendered IngredientItem component.
 */
const IngredientItem = ({ name, quantity }) => {
  let displayQuantity = quantity;
  let displayName = name;

  if (quantity > 1 && !name.endsWith("s")) {
    displayName = `${name}s`;
  }

  return (
    <div>
      <span>
        {displayQuantity} {displayName}
      </span>
    </div>
  );
};

IngredientItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default IngredientItem;
