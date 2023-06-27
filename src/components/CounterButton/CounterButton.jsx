// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNumberOfPeople } from "../../store/actions/recipeActions";
import {
  CounterContainer,
  LeftButton,
  RightButton,
  CountDisplay,
} from "./CounterButton.styled";

// const CounterButton = ({ setNumberOfGuests }) => {
//   const [count, setCount] = useState(1);

//   const increment = () => {
//     setCount(count + 1);
//     setNumberOfGuests(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//     setNumberOfGuests(count - 1);
//   };

//   return (
//     <CounterContainer>
//       <LeftButton onClick={decrement}>-</LeftButton>
//       <CountDisplay>
//         <span>{count}</span>
//         <span>personnes</span>
//       </CountDisplay>
//       <RightButton onClick={increment}>+</RightButton>
//     </CounterContainer>
//   );
// };
// export default CounterButton;
const CounterButton = () => {
  const dispatch = useDispatch();
  const numberOfPeople = useSelector((state) => state.recipes.numberOfPeople);

  return (
    <CounterContainer>
      <LeftButton
        onClick={() => dispatch(setNumberOfPeople(numberOfPeople - 1))}
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
