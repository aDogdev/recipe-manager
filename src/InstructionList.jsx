import React from "react";
import "./InstructionList.css";

function InstructionList(props) {
  const InstructionListItems = props.instructions.map((instruction, index) => {
    return (
      <li key={index}>
        {instruction}
      </li>
    );
  });

  return <ol>{InstructionListItems}</ol>;
}

export default InstructionList;
