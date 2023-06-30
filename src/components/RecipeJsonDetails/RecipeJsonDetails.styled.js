import styled from "styled-components";

export const StyledDivH1 = styled.div`
  text-align: center;
  margin: 170px 0 50px 0;
  @media screen and (max-width: 900px) {
    font-size: 1.7rem;
  }
`;

export const ContentWrapper = styled.div`
  margin: 30px 50px 50px 20px;
  line-height: 28px;
  @media screen and (max-width: 670px) {
    margin: 30px auto; /* Centrer horizontalement */
    max-width: calc(100% - 20px); /* Empêcher le débordement horizontal */
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  height: 486px;
  margin: 0 0 50px 0;
  @media screen and (max-width: 900px) {
    height: 300px;
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

export const StyledH2 = styled.h2`
  color: rgb(255, 66, 105);
  font-size: 1.3rem;
  margin: 30px 0px 20px;
`;

export const StyledH3 = styled.h3`
  margin: 10px 0;
`;

export const ImageTextWrapper = styled.div`
  display: flex;
`;

export const DetailText = styled.p`
  text-align: justify;
  margin: 70px 50px 50px 70px;
  line-height: 28px;
  width: 50%;
`;

export const ContentSection = styled.div`
  margin-left: 60px;
  @media screen and (max-width: 670px) {
    margin-left: 0;
  }
`;

export const ImageInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
  @media screen and (max-width: 670px) {
    margin: 0 auto;
    max-width: calc(100% - 20px); /* Empêcher le débordement horizontal */
  }
`;

export const StyledDiv = styled.div`
  position: relative;
`;

export const ArrowImg = styled.img`
  position: absolute;
  top: 2px;
  left: 100px;
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
