import React from 'react';
import Board from './Board';

const AgentScreen = ({ board }) => {
  const cellSettings = board.map((cell) => {
    return {
      colour: '',
      word: cell.codeName
    }
  })
  return <Board cellSettings={cellSettings} />
}

export default AgentScreen;