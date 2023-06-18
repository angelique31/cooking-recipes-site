import styled from "styled-components";

export const StyledDiv = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 100px;
  margin-bottom: 50px;
  @media screen and (max-width: 940px) {
    gap: 50px;
  }
`;

export const StyledP = styled.p`
  display: flex;
  align-items: center;
  background-color: rgb(249, 249, 249);
  border-radius: 20px;
  padding: 10px 20px;
  @media screen and (max-width: 855px) {
    .prep-text,
    .cook-text {
      display: none;
    }
  }
`;

export const TimerIcon = styled.img`
  margin-top: 5px;
`;
