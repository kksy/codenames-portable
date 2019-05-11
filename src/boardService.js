import { generateBoard } from "./GameBoard";
import { chooseRandomWords } from "./wordList";
import { generateAgentList } from "./agentList";

const createNewBoard = db => sessionId => {
  const words = chooseRandomWords();
  const agents = generateAgentList();
  const initialBoard = generateBoard({ words, agents });
  db.collection("sessions")
    .doc(sessionId)
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
