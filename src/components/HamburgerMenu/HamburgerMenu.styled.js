import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const MobileNavMenu = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  background-color: white;

  @media screen and (max-width: 600px) {
    display: block;
    animation: ${slideInFromRight} 0.3s ease-out;
  }
`;

export const HamburgerMenuContainer = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 0;
    margin-right: 15px;
  }
`;

export const Icon = styled.div`
  position: relative;
  display: inline-block;

  width: 30px;
  height: 24px;

  div {
    position: absolute;
    left: 0;
    height: 4px;
    background-color: #333;
    transition: all 0.3s;
    background-color: rgb(255, 66, 105);
  }

  div:nth-child(1) {
    top: ${(props) => (props.isMenuOpen ? "12px" : "0")};
    width: ${(props) => (props.isMenuOpen ? "30px" : "26px")};
    transform: ${(props) => (props.isMenuOpen ? "rotate(135deg)" : "none")};
  }

  div:nth-child(2) {
    top: 10px;
    width: 30px;
    opacity: ${(props) => (props.isMenuOpen ? "0" : "1")};
  }

  div:nth-child(3) {
    top: ${(props) => (props.isMenuOpen ? "12px" : "20px")};
    width: ${(props) => (props.isMenuOpen ? "30px" : "22px")};
    transform: ${(props) => (props.isMenuOpen ? "rotate(-135deg)" : "none")};
  }
`;

export const Bar = styled.div``;

export const MobileNavLink = styled(Link)`
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  text-align: right;
  color: rgb(255, 66, 105);
  font-weight: 600;
  &:hover {
    background-color: #f1f1f1;
  }
`;
