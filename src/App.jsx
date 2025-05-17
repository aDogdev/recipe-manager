import React from "react";
import RecipeTitle from "./RecipeTitle";
import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";
import "./index.css";

const recipe = {
  title: "Mashed potatoes",
  feedback: {
    rating: 4.8,
    reviews: 20,
  },
  ingredients: [
    { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
    { name: "4 Tbsp butter", prepared: false },
    { name: "1/8 cup heavy cream", prepared: false },
    { name: "Salt", prepared: true },
    { name: "Pepper", prepared: true },
  ],
  instructions: [
    "Add cut potatoes to a pot of heavily salted water.",
    "Bring the pot to a boil.",
    "Boil the potatoes until they are tender when pierced with a fork, approximately 15-20 minutes.",
    "Drain the potatoes.",
    "Put the potatoes back in the pot.",
    "Add butter, cream, salt, and pepper to taste.",
    "Make mashed potatoes.",
    "Re-season and add butter and cream to taste.",
  ],
};

function App() {
  return (
    <article>
      <h1>Recipe Manager</h1>
      <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
      <h2>Ingredients</h2>
      <IngredientList ingredients={recipe.ingredients} />
      <h2>Instructions</h2>
      <InstructionList instructions={recipe.instructions} />
    </article>
  );
}

export default App;
