import { generateBoard } from "./GameBoard";
import { chooseRandomWords } from "./wordList";
import { generateAgentList, BLUE_AGENT, RED_AGENT } from "./agentList";

const createNewBoard = db => sessionId => {
  const doubleAgent = Math.random() < 0.5 ? BLUE_AGENT : RED_AGENT;
  const words = chooseRandomWords();
  const agents = generateAgentList(doubleAgent);
  const initialBoard = generateBoard({ words, agents });
  db.collection("sessions")
    .doc(sessionId)
    .set(
      {
        board: initialBoard,
        doubleAgent,
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

const storeBoardChanges = db => ({ newBoard, sessionId }) => {
  db.collection("sessions")
    .doc(sessionId)
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

export default ({ db }) => ({
  createNewBoard: createNewBoard(db),
  storeBoardChanges: storeBoardChanges(db),
});
