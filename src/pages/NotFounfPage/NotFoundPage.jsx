import LogoItem from "../../components/NavBar/LogoItem/LogoItem";
import {
  Container,
  CenterPage,
  Title,
  TitleText,
  TitleReturn,
  FallingFour,
} from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <Container>
      <LogoItem />
      <CenterPage>
        <Title>
          40<FallingFour>4</FallingFour>
        </Title>
        <TitleText>
          {`Désolé, il semblerait que nous ayons égaré cette page. Pas de souci,
          l'erreur vient de nous, pas de vous.`}
        </TitleText>
        <TitleReturn to="/">Retourner sur la page d’accueil</TitleReturn>
      </CenterPage>
    </Container>
  );
};

export default NotFoundPage;
