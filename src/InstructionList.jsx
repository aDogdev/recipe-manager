import React, { useEffect, useState } from "react";
import "./InstructionList.css";

function InstructionList({ recipe, handleInstruction }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completed = recipe.instructions.filter((i) => i.completed).length;
    setProgress((completed / recipe.instructions.length) * 100);
  }, [recipe]);
  const InstructionListItems = recipe.instructions.map((instruction, index) => {
    return (
      <li
        key={index}
        className={`instruction-step ${
          instruction.completed ? "completed" : ""
        }`}
        onClick={() => handleInstruction(index)}
      >
        {instruction.text}
      </li>
    );
  });

  return (
    <>
      <h2>Instructions</h2>
      <ol>{InstructionListItems}</ol>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }}></div>
      </div>
    </>
  );
}

export default InstructionList;
