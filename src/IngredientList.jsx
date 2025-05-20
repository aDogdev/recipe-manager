import React, { useEffect, useState } from "react";
import "./IngredientList.css";

function IngredientList({ recipe, handleIngredient }) {
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    setPrepared(recipe.ingredients.every((i) => i.prepared));
  }, [recipe]);
  const ingredientListItems = recipe.ingredients.map((ingredient, index) => {
    return (
      <li
        key={index}
        className={ingredient.prepared ? "prepared" : ""}
        onClick={() => handleIngredient(index)}
      >
        {ingredient.name}
      </li>
    );
  });

  return (
    <>
      <ul className="ingredient-grid">{ingredientListItems}</ul>
      {prepared ? (
        <h2 className="status-badge done">Prep work done!</h2>
      ) : (
        <h2 className="status-badge">Just keep chopping.</h2>
      )}
    </>
  );
}

export default IngredientList;
