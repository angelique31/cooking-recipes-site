import RecipeCard from "../RecipeCard/RecipeCard";
import {
  CommonSection,
  CommonCardsContainer,
  StyledH3,
} from "../../assets/Styles/CommonStyles";

const Section = ({ data, title, linkTo }) => {
  return (
    <CommonSection>
      <StyledH3>{title}</StyledH3>
      <CommonCardsContainer>
        {data.map((item, index) => (
          <RecipeCard
            key={index}
            image={item.image}
            title={item.title}
            index={index}
            linkTo={linkTo}
          />
        ))}
      </CommonCardsContainer>
    </CommonSection>
  );
};

export default Section;
