import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #f8f9fa;
  text-align: center;
  color: #e6002e;
  font-weight: 600;
`;

export const FooterParagraph = styled.p`
  margin-bottom: 10px;
`;

export const FooterParagraphFind = styled.p`
  margin-bottom: 10px;
  color: black;
`;

export const SocialLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;

export const SocialList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SocialListItem = styled.li`
  display: inline;
  margin: 0 15px;
`;

export const IconContainer = styled.div`
  display: inline-block;
  transition: all 0.9s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
