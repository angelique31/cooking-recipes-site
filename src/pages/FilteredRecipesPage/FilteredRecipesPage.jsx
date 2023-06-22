/**********************Filtre par barre de recherche******************* */
// import { useSelector } from "react-redux";
// import NavBar from "../../components/NavBar/NavBar";
// import RecipeCard from "../../components/RecipeCard/RecipeCard";
// import RecipeListFilter from "../../components/RecipeListFilter/RecipeListFilter";
// import {
//   RecipesWrapper,
//   StyledH2,
//   RecipeCount,
//   StyledH3,
//   HeadingWrapper,
// } from "./FilteredRecipesPage.styled";
// import { CommonSection } from "../../assets/Styles/CommonStyles";

// const FilteredRecipesPage = () => {
//   const filteredRecipes = RecipeListFilter();
//   const searchValue = useSelector((state) => state.recipes.searchValue);

//   return (
//     <div>
//       <NavBar />
//       <CommonSection>
//         <HeadingWrapper>
//           <StyledH2>
//             {/* pour mettre la 1ere lettre en majuscule :  */}
//             {searchValue.charAt(0).toUpperCase() + searchValue.slice(1)}
//           </StyledH2>
//           <RecipeCount> {filteredRecipes.length} recettes</RecipeCount>
//         </HeadingWrapper>
//         <RecipesWrapper>
//           {filteredRecipes.map((recipe, index) => (
//             <div key={index}>
//               <RecipeCard
//                 key={recipe.id}
//                 item={recipe}
//                 linkTo="/recipe-detail"
//                 showTitle={false}
//               />
//               <StyledH3>{recipe.name}</StyledH3>
//               {/* Ajoutez ici plus de détails sur la recette, tels que les ingrédients, etc. */}
//             </div>
//           ))}
//         </RecipesWrapper>
//       </CommonSection>
//     </div>
//   );
// };

// export default FilteredRecipesPage;

/**************************Filtre par categorie*********************** */
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import NavBar from "../../components/NavBar/NavBar";
// import RecipeCard from "../../components/RecipeCard/RecipeCard";
// import {
//   RecipesWrapper,
//   StyledH2,
//   RecipeCount,
//   StyledH3,
//   HeadingWrapper,
// } from "./FilteredRecipesPage.styled";
// import { CommonSection } from "../../assets/Styles/CommonStyles";

// const FilteredRecipesPage = () => {
//   const { categoryName } = useParams();
//   const searchValue = useSelector((state) => state.recipes.searchValue);

//   const allData = useSelector((state) => state.recipes.recipeData);
//   const recipesData = allData.regularRecipes;

//   // Fonction pour supprimer les accents d'une chaîne de caractères
//   function removeAccents(str) {
//     return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//   }

//   // Filtrage par catégorie
//   let categoryFilteredRecipes = recipesData;
//   if (categoryName) {
//     categoryFilteredRecipes = recipesData.filter((recipe) => {
//       return recipe.category.some((cat) => {
//         // Supprimer les accents et mettre en minuscules
//         let cleanCat = removeAccents(cat).toLowerCase();
//         let cleanCategoryName = removeAccents(categoryName).toLowerCase();
//         // Ignorer la différence entre singulier et pluriel
//         return (
//           cleanCat === cleanCategoryName || cleanCat + "s" === cleanCategoryName
//         );
//       });
//     });
//   }

//   // Filtrage par valeur de recherche (barre de recherche)
//   let searchFilteredRecipes = recipesData;
//   if (searchValue) {
//     searchFilteredRecipes = recipesData.filter((recipe) =>
//       recipe.name.toLowerCase().includes(searchValue.toLowerCase())
//     );
//   }

//   // Combinaison des deux filtres
//   let filteredRecipes = recipesData.filter(
//     (recipe) =>
//       categoryFilteredRecipes.includes(recipe) &&
//       searchFilteredRecipes.includes(recipe)
//   );

//   return (
//     <div>
//       <NavBar />
//       <CommonSection>
//         <HeadingWrapper>
//           <StyledH2>
//             {categoryName
//               ? `Recettes: ${categoryName}`
//               : searchValue.charAt(0).toUpperCase() + searchValue.slice(1)}
//           </StyledH2>
//           <RecipeCount>{filteredRecipes.length} recettes</RecipeCount>
//         </HeadingWrapper>
//         <RecipesWrapper>
//           {filteredRecipes.map((recipe, index) => (
//             <div key={index}>
//               <RecipeCard
//                 key={recipe.id}
//                 item={recipe}
//                 linkTo="/recipe-detail"
//                 showTitle={false}
//               />
//               <StyledH3>{recipe.name}</StyledH3>
//             </div>
//           ))}
//         </RecipesWrapper>
//       </CommonSection>
//     </div>
//   );
// };

// export default FilteredRecipesPage;

/******************************************************** */

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import {
  RecipesWrapper,
  StyledH2,
  RecipeCount,
  StyledH3,
  HeadingWrapper,
} from "./FilteredRecipesPage.styled";
import { CommonSection } from "../../assets/Styles/CommonStyles";

const FilteredRecipesPage = () => {
  const { categoryName } = useParams();
  const searchValue = useSelector((state) => state.recipes.searchValue);

  const allData = useSelector((state) => state.recipes.recipeData);
  const recipesData = allData.regularRecipes;

  // Fonction pour supprimer les accents d'une chaîne de caractères
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  let filteredRecipes = recipesData;

  // Filtrage par catégorie
  if (categoryName && !searchValue) {
    filteredRecipes = recipesData.filter((recipe) => {
      return recipe.category.some((cat) => {
        let cleanCat = removeAccents(cat).toLowerCase();
        let cleanCategoryName = removeAccents(categoryName).toLowerCase();
        return (
          cleanCat === cleanCategoryName || cleanCat + "s" === cleanCategoryName
        );
      });
    });
  }

  if (searchValue) {
    filteredRecipes = recipesData.filter(
      (recipe) =>
        (recipe &&
          recipe.name &&
          recipe.name.toLowerCase().includes(searchValue.toLowerCase())) ||
        (recipe.ingredients &&
          recipe.ingredients.some((ingredient) =>
            ingredient.name.toLowerCase().includes(searchValue.toLowerCase())
          ))
    );
  }

  return (
    <div>
      <NavBar />
      <CommonSection>
        <HeadingWrapper>
          <StyledH2>
            {categoryName
              ? `Recettes: ${categoryName}`
              : searchValue.charAt(0).toUpperCase() + searchValue.slice(1)}
          </StyledH2>
          <RecipeCount>{filteredRecipes.length} recettes</RecipeCount>
        </HeadingWrapper>
        <RecipesWrapper>
          {filteredRecipes.map((recipe, index) => (
            <div key={index}>
              <RecipeCard
                key={recipe.id}
                item={recipe}
                linkTo="/recipe-detail"
                showTitle={false}
              />
              <StyledH3>{recipe.name}</StyledH3>
            </div>
          ))}
        </RecipesWrapper>
      </CommonSection>
    </div>
  );
};

export default FilteredRecipesPage;
