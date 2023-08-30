import {
  FooterContainer,
  FooterParagraph,
  FooterParagraphFind,
  SocialLink,
  SocialList,
  SocialListItem,
  IconContainer,
} from "./Footer.styled";
import linkedin from "../../assets/Icons/linkedin.svg";
import github from "../../assets/Icons/github.svg";

const Footer = () => (
  <FooterContainer>
    <FooterParagraph>Mijoté avec ❤️ par Angélique Rosin</FooterParagraph>
    <FooterParagraph>© 2023 - Angélique Rosin</FooterParagraph>
    <FooterParagraphFind>Retrouvez-moi sur :</FooterParagraphFind>
    <SocialList>
      <SocialListItem>
        <SocialLink href="https://www.linkedin.com/in/ang%C3%A9lique-rosin-5163a9231/">
          <IconContainer>
            <img src={linkedin} alt="LinkedIn" />
          </IconContainer>
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink href="https://github.com/angelique31?tab=repositories">
          <IconContainer>
            <img src={github} alt="Github" />
          </IconContainer>
        </SocialLink>
      </SocialListItem>
    </SocialList>
  </FooterContainer>
);

export default Footer;
