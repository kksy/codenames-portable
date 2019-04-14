import React, { useState } from "react";
import AgentScreen from "./AgentScreen";
import SpymasterScreen from "./SpymasterScreen";
import ChoosePlayerScreen from "./ChoosePlayerScreen";
import { generateBoard } from "./GameBoard";
import { chooseRandomWords } from "./wordList";
import { generateAgentList } from "./agentList";
import "./App.css";

const App = () => {
  const words = chooseRandomWords();
  const agents = generateAgentList();
  const initialBoard = generateBoard({ words, agents });
  const [user, setUser] = useState(null);
  const [board, updateBoard] = useState(initialBoard);

  const screen = {
    agent: <AgentScreen board={board} updateBoard={updateBoard} />,
    spymaster: <SpymasterScreen board={board} updateBoard={updateBoard} />,
  };

  return <div>{user ? screen[user] : <ChoosePlayerScreen setUser={setUser} />}</div>;
};

export default App;
