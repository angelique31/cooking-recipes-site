import { useState } from "react";
import {
  CounterContainer,
  LeftButton,
  RightButton,
  CountDisplay,
} from "./CounterButton.styled";

const CounterButton = () => {
  const [count, setCount] = useState(6);

  return (
    <CounterContainer>
      <LeftButton onClick={() => setCount(count - 1)}>-</LeftButton>
      <CountDisplay>
        <span>{count}</span>
        <span>personnes</span>
      </CountDisplay>
      <RightButton onClick={() => setCount(count + 1)}>+</RightButton>
    </CounterContainer>
  );
};

export default CounterButton;
