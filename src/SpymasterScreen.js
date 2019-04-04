import React from "react";
import "./App.css";
import Board from "./Board";

const cellMapping = {
  R: { colour: "#D64545" },
  B: { colour: "#2680C2" },
  X: { colour: "#888" },
  "": { colour: "#F8E3A3" },
};

const SpymasterScreen = ({ board }) => {
  const cellSettings = board.map(cell => {
    return {
      colour: cellMapping[cell.agent].colour,
      word: cell.codeName,
      position: cell.position,
    };
  });
  return (
    <div>
      <Board cellSettings={cellSettings} />
    </div>
  );
};

export default SpymasterScreen;
