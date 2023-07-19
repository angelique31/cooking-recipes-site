// NewsDetails.styles.js
import styled from "styled-components";

export const StyleDiv = styled.div`
  text-align: justify;
  margin: 70px 50px 50px 70px;
  line-height: 28px;
  width: 50%;
  @media screen and (max-width: 1158px) {
    margin: 100px 50px 0 55px;
    width: auto;
  }
  @media screen and (max-width: 560px) {
    margin: 0 30px 0 30px;
  }
`;

export const StyledImage = styled.img`
  width: 50%;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  height: 286px;
  margin-top: 105px;
  margin-left: 60px;
  background-color: #f0f0f0;
  @media screen and (max-width: 1158px) {
    margin: 63px auto 0 auto;
    display: block;
    @media screen and (max-width: 560px) {
      width: 100%;
      max-width: calc(100% - 20px);
    }
  }
`;

export const StyledH1 = styled.h1`
  text-align: center;
  margin: 160px 0 0;
  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 1.3rem;
  margin: 30px 0 20px 0;
  color: rgb(255, 66, 105);
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px 0 50px;
`;

export const FlexItem = styled.div`
  display: flex;
  @media screen and (max-width: 1158px) {
    display: block;
  }
`;

export const StyledDivLineHeight = styled.div`
  line-height: 28px;
  text-align: justify;
  margin: 0 50px 0 55px;
  @media screen and (max-width: 560px) {
    margin: 0 30px 0 30px;
  }
`;
