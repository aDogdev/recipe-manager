import React, { useState, useEffect } from "react";
import RecipeTitle from "./RecipeTitle";
import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";
import "./index.css";

const initialRecipe = {
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
    {
      text: "Add cut potatoes to a pot of heavily salted water.",
      completed: false,
    },
    { text: "Bring the pot to a boil.", completed: false },
    {
      text: "Boil the potatoes until they are tender when pierced with a fork, approximately 15-20 minutes.",
      completed: false,
    },
    { text: "Drain the potatoes.", completed: false },
    { text: "Put the potatoes back in the pot.", completed: false },
    { text: "Add butter, cream, salt, and pepper to taste.", completed: false },
    { text: "Make mashed potatoes.", completed: false },
    { text: "Re-season and add butter and cream to taste.", completed: false },
  ],
};

function App() {
  const [recipe, setRecipe] = useState(initialRecipe);
  const [prepared, setPrepared] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setPrepared(recipe.ingredients.every((i) => i.prepared));
  }, [recipe]);

  useEffect(() => {
    const completed = recipe.instructions.filter((i) => i.completed).length;
    setProgress((completed / recipe.instructions.length) * 100);
  }, [recipe]);

  useEffect(() => {
    const savedRecipe = localStorage.getItem("recipe");
    if (savedRecipe) {
      setRecipe(JSON.parse(savedRecipe));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(recipe));
  }, [recipe]);

  function handleIngredient(index) {
    const updatedRecipe = { ...recipe };
    updatedRecipe.ingredients[index].prepared =
      !updatedRecipe.ingredients[index].prepared;
    setRecipe(updatedRecipe);
  }

  const handleInstruction = (index) => {
    const updatedRecipe = { ...recipe };
    updatedRecipe.instructions[index].completed =
      !updatedRecipe.instructions[index].completed;
    setRecipe(updatedRecipe);
  };

  return (
    <article>
      <h1>Recipe Manager</h1>
      <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
      <h2>Ingredients</h2>
      <IngredientList
        ingredients={recipe.ingredients}
        handleIngredient={handleIngredient}
      />
      {prepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping.</h2>}
      <h2>Instructions</h2>
      <InstructionList
        instructions={recipe.instructions}
        handleInstruction={handleInstruction}
      />
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }}></div>
      </div>
    </article>
  );
}

export default App;
