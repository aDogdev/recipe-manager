import React from "react";
import "./IngredientList.css";

function IngredientList({ ingredients, handleIngredient }) {
  const ingredientListItems = ingredients.map((ingredient, index) => {
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

  return <ul>{ingredientListItems}</ul>;
}

export default IngredientList;
