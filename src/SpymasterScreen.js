import React from "react";
import "./App.css";
import Board from "./Board";
import { RED_AGENT } from "./agentList";

const cellMapping = {
  R: { colour: "#D64545", selectedColour: "#FFF" },
  B: { colour: "#2680C2", selectedColour: "#FFF" },
  X: { colour: "#888", selectedColour: "#FFF" },
  "": { colour: "#F8E3A3", selectedColour: "#FFF" },
};

const getDoubleAgentIndicator = doubleAgent => {
  if (doubleAgent) {
    return doubleAgent === RED_AGENT ? "red-agent" : "blue-agent";
  }

  return "";
};

const SpymasterScreen = ({ board, doubleAgent }) => {
  const cellSettings = board.map(cell => {
    return {
      colour: cell.selected ? cellMapping[cell.agent].selectedColour : cellMapping[cell.agent].colour,
      word: cell.codeName,
      position: cell.position,
    };
  });
  return (
    <div data-testid="spymaster-board" className={getDoubleAgentIndicator(doubleAgent)}>
      <Board cellSettings={cellSettings} doubleAgent={doubleAgent} />
    </div>
  );
};

export default SpymasterScreen;
