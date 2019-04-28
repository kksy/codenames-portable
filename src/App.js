import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import isEqual from "lodash.isequal";
import AgentScreen from "./AgentScreen";
import SpymasterScreen from "./SpymasterScreen";
import ChoosePlayerScreen from "./ChoosePlayerScreen";
import { generateBoard } from "./GameBoard";
import { chooseRandomWords } from "./wordList";
import { generateAgentList } from "./agentList";
import "./App.css";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// const CreateGameSessionScreen = ({ setSession }) => {
//   return (
//     <div className="Screen">
//       <h3>Enter your game pin</h3>
//         <form>
//           <button className="Button" onClick={() => setSession({ pin: 'apple' })}>
//             Join
//           </button>
//         </form>
//     </div>
//   );
// }

const NewGameButton = ({ onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      New Game
    </button>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [board, updateBoard] = useState(null);
  const prevBoardRef = useRef();

  const createNewBoard = () => {
    const words = chooseRandomWords();
    const agents = generateAgentList();
    const initialBoard = generateBoard({ words, agents });
    db.collection("sessions")
      .doc("session001")
      .set(
        {
          board: initialBoard,
        },
        { merge: true }
      )
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  };

  const storeBoardChanges = newBoard => {
    db.collection("sessions")
      .doc("session001")
      .set(
        {
          board: newBoard,
        },
        { merge: true }
      )
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  };

  useEffect(() => {
    prevBoardRef.current = board;
    const docRef = db.collection("sessions").doc("session001");
    docRef.onSnapshot(snapshot => {
      const newBoard = snapshot.data().board;
      if (prevBoardRef && !isEqual(prevBoardRef.current, newBoard)) {
        updateBoard(snapshot.data().board);
      }
    });
  });

  const screen = {
    agent: <AgentScreen board={board} updateBoard={storeBoardChanges} />,
    spymaster: (
      <div>
        <SpymasterScreen board={board} />
        <div className="AgentControls">
          <NewGameButton onClick={createNewBoard} />
        </div>
      </div>
    ),
  };

  return <div>{user && board ? screen[user] : <ChoosePlayerScreen setUser={setUser} />}</div>;
};

export default App;
