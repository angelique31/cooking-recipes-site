import styled from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
`;

export const StyledDivH1 = styled.div`
  text-align: center;
  margin: 170px 0 50px 0;
  @media screen and (max-width: 900px) {
    font-size: 1.7rem;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 1.7rem;
  @media screen and (max-width: 900px) {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    @media screen and (max-width: 611px) {
      width: 60%;
    }
    @media screen and (max-width: 485px) {
      width: 70%;
    }
  }
`;

export const ArrowImg = styled.img`
  position: absolute;
  top: 2px;
  left: 100px;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    top: 0;
  }
  @media screen and (max-width: 611px) {
    left: 50px;
  }
  @media screen and (max-width: 485px) {
    left: 10px;
  }
`;
