import React from "react";
import "./App.css";
import Board from "./Board";

const cellMapping = {
  R: { colour: "#D64545", selectedColour: "#FFF" },
  B: { colour: "#2680C2", selectedColour: "#FFF" },
  X: { colour: "#888", selectedColour: "#FFF" },
  "": { colour: "#F8E3A3", selectedColour: "#FFF" },
};

const SpymasterScreen = ({ board }) => {
  const cellSettings = board.map(cell => {
    return {
      colour: cell.selected ? cellMapping[cell.agent].selectedColour : cellMapping[cell.agent].colour,
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
