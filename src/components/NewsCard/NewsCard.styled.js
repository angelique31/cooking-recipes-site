import styled from "styled-components";

export const StyledNewsCard = styled.div`
  width: 300px;
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(hsla(0, 0%, 100%, 0), rgba(0, 0, 0, 0.5));
  }
`;

export const NewsCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

export const NewsTitle = styled.h3`
  margin: 0;
  padding: 10px;
  margin: 0px;
  position: absolute;
  bottom: 0;
  color: white;
  font-size: 1rem;
`;
