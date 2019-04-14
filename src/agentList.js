const generateRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

export const generateAgentList = () => {
  let agentPositions = { B: new Set(), R: new Set(), X: new Set() };
  let agents = new Array(25).fill("");
  let positionsToBeFilled = Array.from(agents.keys());

  while (agentPositions["B"].size !== 9) {
    const maxPositionsToBeFilledIndex = positionsToBeFilled.length - 1;
    const randomPosition = positionsToBeFilled[generateRandomNumber(maxPositionsToBeFilledIndex)];
    agentPositions["B"].add(randomPosition);
    positionsToBeFilled = positionsToBeFilled.filter(position => position !== randomPosition);
  }

  while (agentPositions["R"].size !== 8) {
    const maxPositionsToBeFilledIndex = positionsToBeFilled.length - 1;
    const randomPosition = positionsToBeFilled[generateRandomNumber(maxPositionsToBeFilledIndex)];
    agentPositions["R"].add(randomPosition);
    positionsToBeFilled = positionsToBeFilled.filter(position => position !== randomPosition);
  }

  while (agentPositions["X"].size !== 1) {
    const maxPositionsToBeFilledIndex = positionsToBeFilled.length - 1;
    const randomPosition = positionsToBeFilled[generateRandomNumber(maxPositionsToBeFilledIndex)];
    agentPositions["X"].add(randomPosition);
    positionsToBeFilled = positionsToBeFilled.filter(position => position !== randomPosition);
  }

  Object.keys(agentPositions).map(agent => {
    [...agentPositions[agent]].forEach(position => {
      agents[position] = agent;
    });
  });

  return agents;
};
