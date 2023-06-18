import styled from "styled-components";

export const CategoryCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 70px 0;
  gap: 100px;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    gap: 50px;
  }
  .styled-icon {
    color: #ff4269;
    width: 40px;
    height: 40px;
  }
`;
