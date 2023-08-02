import { LoaderContainer, Loader, Letters } from "./LoaderComponent.styled";

const LoaderComponent = () => {
  return (
    <LoaderContainer>
      <Loader>
        <Letters>L</Letters>
        <Letters>O</Letters>
        <Letters>A</Letters>
        <Letters>D</Letters>
        <Letters>I</Letters>
        <Letters>N</Letters>
        <Letters>G</Letters>
      </Loader>
    </LoaderContainer>
  );
};

export default LoaderComponent;
