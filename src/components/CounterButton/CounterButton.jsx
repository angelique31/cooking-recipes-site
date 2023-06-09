import { useState } from "react";
import {
  CounterContainer,
  LeftButton,
  RightButton,
  CountDisplay,
} from "./CounterButton.styled";

/**
 * Affiche un bouton de compteur permettant d'ajuster un nombre.
 *
 * @returns {JSX.Element} Élément JSX représentant le bouton de compteur.
 */
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
