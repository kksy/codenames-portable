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

const Board = ({ cellSettings, className, onClickCell }) => {
  return (
    <div data-testid="board" className={`Board ${className}`}>
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
