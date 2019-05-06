import React from "react";

const ChoosePlayerScreen = ({ setRole }) => {
  return (
    <div className="Screen">
      <h3>Who are you?</h3>
      <div className="ChoosePlayerControls">
        <button className="Button" onClick={() => setRole("agent")}>
          Agent
        </button>
        <button className="Button" onClick={() => setRole("spymaster")}>
          Spymaster
        </button>
      </div>
    </div>
  );
};

export default ChoosePlayerScreen;
