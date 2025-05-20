import React from "react";
import "./InstructionList.css";

function InstructionList({ instructions, handleInstruction }) {
  const InstructionListItems = instructions.map((instruction, index) => {
    return (
      <li
        key={index}
        className={instruction.completed ? "completed" : ""}
        onClick={() => handleInstruction(index)}
      >
        {instruction.text}
      </li>
    );
  });

  return <ol>{InstructionListItems}</ol>;
}

export default InstructionList;
