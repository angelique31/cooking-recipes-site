import { useParams } from "react-router-dom";
import { recipeData } from "../../datas/recipeData.js";
import NavBar from "../NavBar/NavBar.jsx";
import cookingIcon from "../../assets/Icons/cookingIcon.svg";
import timerIcon from "../../assets/Icons/timerIcon.svg";
import {
  StyledH1,
  StyledH2,
  ContentWrapper,
  StyledImage,
  ImageTextWrapper,
  DetailText,
  ContentSection,
} from "./RecipeDetails.styled.js";
import RecipeButton from "../RecipeButton/RecipeButton.jsx";
import CounterButton from "../CounterButton/CounterButton.jsx";
import RecipeInfoBox from "../RecipeInfoBox/RecipeInfoBox.jsx";

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Cela récupère l'id de la recette à partir de l'URL
  const recipe = recipeData.find((item, index) => index === parseInt(recipeId));

  if (!recipe) {
    return <h2>Recette non trouvée</h2>;
  }

  return (
    <div>
      <NavBar />
      <StyledH1>{recipe.title}</StyledH1>
      <ContentWrapper>
        <ImageTextWrapper>
          <StyledImage src={recipe.image} alt={recipe.title} />

          <DetailText>{recipe.detailText}</DetailText>
        </ImageTextWrapper>
        <ContentSection>
          <RecipeInfoBox
            servings={recipe.servings}
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
          />
          <RecipeButton />

          <StyledH2>Ingrédients</StyledH2>
          <CounterButton />
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <StyledH2>Préparation</StyledH2>

          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>
                <strong> {index + 1}. </strong>
                {instruction}
              </li>
            ))}
          </ol>
        </ContentSection>
      </ContentWrapper>
    </div>
  );
};

export default RecipeDetails;

// import {
//   StyledH1,
//   StyledH2,
//   ContentWrapper,
//   StyledImage,
//   StyledDiv,
//   StyledP,
//   DetailTextWrapper,
// } from "./RecipeDetails.styled.js";

// const RecipeDetails = () => {
//   const { recipeId } = useParams();
//   const recipe = recipeData.find((item, index) => index === parseInt(recipeId));

//   if (!recipe) {
//     return <h2>Recette non trouvée</h2>;
//   }

//   const mainText = recipe.detailText.substring(
//     0,
//     recipe.detailText.lastIndexOf("Pour le service")
//   );
//   const serviceText = recipe.detailText.substring(
//     recipe.detailText.lastIndexOf("Pour le service")
//   );

//   return (
//     <div>
//       <NavBar />
//       <StyledH1>{recipe.title}</StyledH1>
//       <ContentWrapper>
//         <div>
//           <StyledImage src={recipe.image} alt={recipe.title} />

//           <DetailTextWrapper>
//             <p>{mainText}</p>
//           </DetailTextWrapper>
//         </div>
//         <p>{serviceText}</p>

//         <div>
//           <StyledDiv>
//             <StyledP>Portions : {recipe.servings} de sirop</StyledP>
//             <StyledP>
//               <img src={timerIcon} alt="Timer icon" />
//               Préparation : {recipe.prepTime}
//             </StyledP>
//             <StyledP>
//               <img src={cookingIcon} alt="Cooking icon" />
//               Cuisson : {recipe.cookTime}
//             </StyledP>
//           </StyledDiv>
//           <RecipeButton />
//           <StyledH2>Ingrédients</StyledH2>
//           <ul>
//             {recipe.ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient}</li>
//             ))}
//           </ul>
//           <StyledH2>Préparation</StyledH2>
//           <ol>
//             {recipe.instructions.map((instruction, index) => (
//               <li key={index}>{instruction}</li>
//             ))}
//           </ol>
//         </div>
//       </ContentWrapper>
//     </div>
//   );
// };

// export default RecipeDetails;
