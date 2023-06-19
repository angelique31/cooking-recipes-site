import styled from "styled-components";

const StyledButton = styled.button`
  padding: 14px 24px 10px 20px;
  border: none;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  height: 50px;
  border-radius: 0 25px 25px 0;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  background-color: #ff4269;
  transition: 1s;
  .icon {
    display: none;
  }
  @media screen and (max-width: 556px) {
    font-size: 1rem;
    padding: 10px 20px;
    height: 40px;
    .text {
      display: none;
    }
    .icon {
      display: inline-block;
    }
  }
  ${(props) =>
    props.isRecipePage
      ? `
        height: 40px;
        font-size: 1rem;
        padding: 0 15px;
      `
      : ""}
`;

export default StyledButton;
