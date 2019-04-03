import React, { useState } from 'react';
import AgentScreen from './AgentScreen';
import SpymasterScreen from './SpymasterScreen';
import { generateBoard } from './GameBoard';
import './App.css';

const words = [
  "eyes", "tin", "icicle", "cemetery", "punishment", "fact", "root", "doctor", "baby", "field", "respect", "hall", "pancake", "pencil", "pie", "stem", "step", "holiday", "silver", "market", "tomatoes", "leather", "scissors", "week", "kitty",
]

const agents = ['B', '', '', 'B', '','B', 'R', 'R', 'B', 'B','B', 'R', '', 'B', 'R','B', 'R', '', 'X', 'R', 'R', '', 'R', 'B', '']

const App = () => {
  const board = generateBoard({words,agents})
  const [user, setUser] = useState(null);
  const screen = {
    agent: <AgentScreen board={board} />,
    spymaster: <SpymasterScreen board={board} />,
  }
  const ChoosePlayerScreen = () => {
    return (
      <div className="Screen">
        <h3>Who are you?</h3>
        <div className="ChoosePlayerControls">
          <button className="Button" onClick={() => setUser('agent')}>Agent</button>
          <button className="Button" onClick={() => setUser('spymaster')}>Spymaster</button>
        </div>
      </div>
    ); 
  }
  return (
    <div>
      {user ? screen[user] : <ChoosePlayerScreen />}
    </div>
  )
}

export default App;
