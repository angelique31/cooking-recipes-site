// const Footer = () => (
//   <footer>
//     <p>© 2023 - Angélique Rosin</p>
//     <p>Retrouvez-moi sur :</p>
//     <ul>
//       <li>
//         <a href="https://www.linkedin.com/in/ang%C3%A9lique-rosin-5163a9231/">
//           LinkedIn
//         </a>
//       </li>
//       <li>
//         <a href="https://github.com/angelique31?tab=repositories">Github</a>
//       </li>
//     </ul>
//   </footer>
// );

// export default Footer;

import {
  FooterContainer,
  FooterParagraph,
  SocialLink,
  SocialList,
  SocialListItem,
  IconContainer,
} from "./Footer.styled";
import linkedin from "../../assets/Icons/linkedin.svg";
import github from "../../assets/Icons/github.svg";

const Footer = () => (
  <FooterContainer>
    <FooterParagraph>© 2023 - Angélique Rosin</FooterParagraph>
    <FooterParagraph>Retrouvez-moi sur :</FooterParagraph>
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
