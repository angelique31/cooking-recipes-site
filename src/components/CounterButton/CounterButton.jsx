import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNumberOfPeople } from "../../store/actions/recipeActions";
import {
  CounterContainer,
  LeftButton,
  RightButton,
  CountDisplay,
} from "./CounterButton.styled";

/**
 * A button counter component that updates the number of people for a recipe.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number|string} props.servingSize - The initial serving size for the recipe.
 * @returns {JSX.Element} The JSX-code for the counter button component.
 */
const CounterButton = ({ servingSize }) => {
  const dispatch = useDispatch();
  const numberOfPeople = useSelector((state) => state.recipes.numberOfPeople);

  useEffect(() => {
    if (!numberOfPeople) {
      dispatch(setNumberOfPeople(parseInt(servingSize, 10)));
    }
  }, [servingSize, dispatch, numberOfPeople]);

  return (
    <CounterContainer>
      <LeftButton
        onClick={() => {
          if (numberOfPeople > 1) {
            dispatch(setNumberOfPeople(numberOfPeople - 1));
          }
        }}
      >
        -
      </LeftButton>
      <CountDisplay>
        <span>{numberOfPeople}</span>
        <span>personnes</span>
      </CountDisplay>
      <RightButton
        onClick={() => dispatch(setNumberOfPeople(numberOfPeople + 1))}
      >
        +
      </RightButton>
    </CounterContainer>
  );
};

CounterButton.propTypes = {
  servingSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default CounterButton;
