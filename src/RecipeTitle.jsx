import React from "react";
import "./RecipeTitle.css";

function RecipeTitle(props) {
  return (
    <section className="recipe-header">
      <h2>{props.title}</h2>
      <h3 className={props.feedback.rating <= 3.5 ? "red" : "green"}>
        {props.feedback.rating} from {props.feedback.reviews} reviews
      </h3>
    </section>
  );
}

export default RecipeTitle;
