import React from 'react';
import './App.css';

const generateCells = (cellSettings) => cellSettings.map((cell) => {
  return <Cell colour={cell.colour} word={cell.word} />
});

const Cell = ({ colour, word }) => {
  return <div className="Board__tile" style={{ backgroundColor: colour }} > {word}</div>
}

const Board = ({ cellSettings }) => {
  return (
    <div className="Board">
      {generateCells(cellSettings)}
    </div>
  )
}

export default Board;