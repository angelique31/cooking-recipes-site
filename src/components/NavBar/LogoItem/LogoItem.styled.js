import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  margin: 20px 0 20px 10px;
`;

export const StyledH1 = styled.h1`
  // font-size: 2rem;
  color: #ff4269;
  font-size: ${(props) => (props.isRecipePage ? "1.5rem" : "2rem")};
  @media screen and (max-width: 490px) {
    font-size: 1.5rem;
  }
`;

export const IconWrapper = styled.div`
  color: #ff4269;
  .kitchenSet-icon {
    height: ${(props) => (props.isRecipePage ? "30px" : "40px")};
    @media screen and (max-width: 490px) {
      height: 35px;
    }
  }
`;
