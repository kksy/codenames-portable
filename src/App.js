import React, { useState } from 'react';
import AgentScreen from './AgentScreen';
import SpymasterScreen from './SpymasterScreen';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const screen = {
    agent: <AgentScreen />,
    spymaster: <SpymasterScreen />,
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
