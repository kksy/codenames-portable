import React, { useState } from "react";
import AgentScreen from "./AgentScreen";
import SpymasterScreen from "./SpymasterScreen";
import ChoosePlayerScreen from "./ChoosePlayerScreen";
import { generateBoard } from "./GameBoard";
import "./App.css";

const words = [
  "eyes",
  "tin",
  "icicle",
  "cemetery",
  "punishment",
  "fact",
  "root",
  "doctor",
  "baby",
  "field",
  "respect",
  "hall",
  "pancake",
  "pencil",
  "pie",
  "stem",
  "step",
  "holiday",
  "silver",
  "market",
  "tomatoes",
  "leather",
  "scissors",
  "week",
  "kitty",
];

const agents = [
  "B",
  "",
  "",
  "B",
  "",
  "B",
  "R",
  "R",
  "B",
  "B",
  "B",
  "R",
  "",
  "B",
  "R",
  "B",
  "R",
  "",
  "X",
  "R",
  "R",
  "",
  "R",
  "B",
  "",
];

const App = () => {
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
