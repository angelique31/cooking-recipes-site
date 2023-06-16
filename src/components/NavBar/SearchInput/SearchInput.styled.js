import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  color: rgb(182, 182, 241);
  font-size: 0.8rem;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  border-radius: 25px 0 0 25px;
  border: solid 1px #dee2e6;
  background: white;
  position: relative;
  font-size: 1.2rem;
  cursor: pointer;
  padding-left: 75px;
  &:focus {
    box-shadow: 0 0 10px 0 rgb(255, 111, 97);
    outline: none;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 15px;
  width: 22px;
  height: 22px;
  color: #ff4269;
  .search-icon {
    height: 17px;
    color: #ff4269;
  }
`;
