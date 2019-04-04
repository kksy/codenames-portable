import React from "react";

const ChoosePlayerScreen = ({ setUser }) => {
  return (
    <div className="Screen">
      <h3>Who are you?</h3>
      <div className="ChoosePlayerControls">
        <button className="Button" onClick={() => setUser("agent")}>
          Agent
        </button>
        <button className="Button" onClick={() => setUser("spymaster")}>
          Spymaster
        </button>
      </div>
    </div>
  );
};

export default ChoosePlayerScreen;
