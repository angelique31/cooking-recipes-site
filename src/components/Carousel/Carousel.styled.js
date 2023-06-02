import styled, { css } from "styled-components";

export const CarouselContainer = styled.div`
  width: 50%;
  height: 300px;
  position: relative;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
    `}
`;
