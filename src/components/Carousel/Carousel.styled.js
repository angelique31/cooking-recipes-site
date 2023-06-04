import styled, { css } from "styled-components";

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselContainer = styled.div`
  width: 50%;
  height: 300px;
  position: relative;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
  height: 178px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
    `}
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
`;
