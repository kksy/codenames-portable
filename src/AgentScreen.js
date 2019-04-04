import React from "react";
import Board from "./Board";

const cellMapping = {
  R: { colour: "#D64545" },
  B: { colour: "#2680C2" },
  X: { colour: "#888" },
  "": { colour: "#F8E3A3" },
};

const AgentScreen = ({ board, updateBoard }) => {
  const cellSettings = board.map(cell => {
    return {
      colour: cell.selected ? cellMapping[cell.agent].colour : cellMapping[""].colour,
      word: cell.codeName,
      position: cell.position,
    };
  });

  const onClickCell = ({ position }) => {
    const markCellAsClicked = cell => ({ ...cell, selected: true });
    const newBoard = board.map(cell => {
      if (cell.position === position) {
        return markCellAsClicked(cell);
      }
      return cell;
    });
    updateBoard(newBoard);
  };

  return <Board cellSettings={cellSettings} onClickCell={onClickCell} />;
};

export default AgentScreen;
