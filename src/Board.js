import React from 'react';
import './App.css';

const words = [
  "eyes", "tin", "icicle", "cemetery", "punishment", "fact", "root", "doctor", "baby", "field", "respect", "hall", "pancake", "pencil", "pie", "stem", "step", "holiday", "silver", "market", "tomatoes", "leather", "scissors", "week", "kitty",
]

const getWords = () => words.map((word) => {
  return <div className="Board__tile">{word}</div>
});


const Board = () => {
  return (
    <div className="Board">
      {getWords()}
    </div>
  )
}

export default Board;