import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "./index.css";
import App from "./App";
import _boardService from "./boardService";
import * as serviceWorker from "./serviceWorker";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const boardService = _boardService({ db });

ReactDOM.render(<App db={db} boardService={boardService} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
