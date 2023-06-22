import { useSelector } from "react-redux";

const CategoriesRecipes = () => {
  // Récupérer les données des recettes à partir du store Redux
  const recipesData = useSelector((state) => state.recipes.recipeData);

  // Définir les catégories
  const categories = ["Rapide", "Entrées", "Plat", "Desserts", "Apéritifs"];

  return (
    <div>
      {/* Boucle sur chaque catégorie */}
      {categories.map((category) => {
        // Filtrer les recettes par catégorie
        const filteredRecipes = recipesData.filter((recipe) =>
          recipe.category.includes(category)
        );

        // Afficher les recettes filtrées pour cette catégorie
        return (
          <div key={category}>
            <h2>{category}</h2>
            <ul>
              {filteredRecipes.map((recipe) => (
                <li key={recipe.id}>{recipe.name}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesRecipes;
