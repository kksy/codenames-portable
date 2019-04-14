import React from "react";
import "./App.css";

const Cell = ({ colour, word, position, onClick = () => {} }) => {
  const clickHandler = event => {
    console.log(`clicked cell ${position}`);
    onClick({ position });
  };

  return (
    <div className="Board__tile" onClick={clickHandler} style={{ backgroundColor: colour }}>
      {word}
    </div>
  );
};

const Board = ({ cellSettings, onClickCell }) => {
  return (
    <div className="Board">
      {cellSettings.map(cell => {
        return (
          <Cell
            key={cell.position}
            position={cell.position}
            onClick={onClickCell}
            colour={cell.colour}
            word={cell.word}
          />
        );
      })}
    </div>
  );
};

export default Board;
