import { useDispatch, useSelector } from "react-redux";
import { setNumberOfPeople } from "../../store/actions/recipeActions";
import {
  CounterContainer,
  LeftButton,
  RightButton,
  CountDisplay,
} from "./CounterButton.styled";
import { useEffect } from "react";

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

export default CounterButton;
