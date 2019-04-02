import React from 'react';
import './App.css';

const spymasterBoardBlue = [
  ['B', '', '', 'B', ''],
  ['B', 'R', 'R', 'B', 'B'],
  ['B', 'R', '', 'B', 'R'],
  ['B', 'R', '', 'X', 'R'],
  ['R', '', 'R', 'B', '']
]

const cellMapping = {
  R: { colour: '#D64545' },
  B: { colour: '#2680C2' },
  X: { colour: 'black' },
  '': { colour: '#F8E3A3'}
}

const Cell = ({ colour }) => {
  return <div className="SpymasterBoard__cell" style={{ backgroundColor: colour }} />
}

const SpymasterScreen = () => {
  return (
    <div className="SpymasterBoard">
      {spymasterBoardBlue.map((row, index) => {
        return row.map((cell, index) => {
          return <Cell colour={cellMapping[cell].colour} />
        })
        
      })}
    </div>
  )
}

export default SpymasterScreen;