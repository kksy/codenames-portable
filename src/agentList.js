const generateRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

export const BLUE_AGENT = "B";
export const RED_AGENT = "R";
export const ASSASSIN = "X";

export const generateAgentList = doubleAgent => {
  let agentPositions = { B: new Set(), R: new Set(), X: new Set() };
  let agents = new Array(25).fill("");
  let positionsToBeFilled = Array.from(agents.keys());

  const numberOfRedAgents = doubleAgent === RED_AGENT ? 9 : 8;
  const numberOfBlueAgents = doubleAgent === BLUE_AGENT ? 9 : 8;
  const numberOfAssassin = 1;

  while (agentPositions[BLUE_AGENT].size !== numberOfBlueAgents) {
    const maxPositionsToBeFilledIndex = positionsToBeFilled.length - 1;
    const randomPosition = positionsToBeFilled[generateRandomNumber(maxPositionsToBeFilledIndex)];
    agentPositions[BLUE_AGENT].add(randomPosition);
    positionsToBeFilled = positionsToBeFilled.filter(position => position !== randomPosition);
  }

  while (agentPositions[RED_AGENT].size !== numberOfRedAgents) {
    const maxPositionsToBeFilledIndex = positionsToBeFilled.length - 1;
    const randomPosition = positionsToBeFilled[generateRandomNumber(maxPositionsToBeFilledIndex)];
    agentPositions[RED_AGENT].add(randomPosition);
    positionsToBeFilled = positionsToBeFilled.filter(position => position !== randomPosition);
  }

  while (agentPositions[ASSASSIN].size !== numberOfAssassin) {
    const maxPositionsToBeFilledIndex = positionsToBeFilled.length - 1;
    const randomPosition = positionsToBeFilled[generateRandomNumber(maxPositionsToBeFilledIndex)];
    agentPositions[ASSASSIN].add(randomPosition);
    positionsToBeFilled = positionsToBeFilled.filter(position => position !== randomPosition);
  }

  Object.keys(agentPositions).map(agent => {
    [...agentPositions[agent]].forEach(position => {
      agents[position] = agent;
    });
  });

  return agents;
};
