import React, { useState } from "react";

const EnterSessionScreen = ({ setSession }) => {
  const [value, updateField] = useState(null);
  return (
    <div className="Screen">
      <form onSubmit={() => setSession(value)}>
        <h3>
          <label htmlFor="EnterSessionScreen-input">Enter a game session name</label>
        </h3>
        <input id="EnterSessionScreen-input" onChange={e => updateField(e.target.value)} type="text" />
        <button type="submit" className="Button">
          Join
        </button>
      </form>
    </div>
  );
};

export default EnterSessionScreen;
