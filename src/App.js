import React, { useState, useRef } from "react";
import "firebase/firestore";
import isEqual from "lodash.isequal";
import AgentScreen from "./AgentScreen";
import SpymasterScreen from "./SpymasterScreen";
import ChoosePlayerScreen from "./ChoosePlayerScreen";
import EnterSessionScreen from "./EnterSessionScreen";
import "./App.css";

const NewGameButton = ({ onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      New Game
    </button>
  );
};

const App = ({ db, boardService }) => {
  const [role, setRole] = useState(null);
  const [board, updateBoard] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [doubleAgent, setDoubleAgent] = useState(null);
  const prevBoardRef = useRef();

  const _setGameSession = realTimeUpdateBoard => async sessionId => {
    setSessionId(sessionId);

    document.title = `${sessionId}`;

    const docRef = await db
      .collection("sessions")
      .doc(sessionId)
      .get();

    if (!docRef.exists) {
      console.log(docRef);
      await boardService.createNewBoard(sessionId);
    }

    setDoubleAgent(docRef.data().doubleAgent);

    realTimeUpdateBoard(sessionId);
  };

  const realTimeUpdate = sessionId => {
    prevBoardRef.current = board;
    const docRef = db.collection("sessions").doc(sessionId);
    docRef.onSnapshot(snapshot => {
      const newBoard = snapshot.data().board;
      if (prevBoardRef && !isEqual(prevBoardRef.current, newBoard)) {
        updateBoard(snapshot.data().board);
      }
    });
  };

  const setGameSession = _setGameSession(realTimeUpdate);

  const screen = {
    agent: (
      <AgentScreen board={board} updateBoard={newBoard => boardService.storeBoardChanges({ sessionId, newBoard })} />
    ),
    spymaster: (
      <div>
        <SpymasterScreen board={board} doubleAgent={doubleAgent} />
        <div className="AgentControls">
          <NewGameButton onClick={() => boardService.createNewBoard(sessionId)} />
        </div>
      </div>
    ),
  };

  if (!sessionId) {
    return <EnterSessionScreen setSession={setGameSession} />;
  }

  return <div>{role && board ? screen[role] : <ChoosePlayerScreen setRole={setRole} />}</div>;
};

export default App;
